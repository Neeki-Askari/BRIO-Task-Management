// TaskProgress.tsx
import React, { useContext, useMemo } from "react";

import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ProgressCard from "./ProgressCard";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  useDroppable,
} from "@dnd-kit/core";
import {
  TaskContext,
  type Task,
  type TaskContextType,
} from "../../../ context/contexts";

type ColumnId = "in-queue" | "in-progress" | "waiting-for-you" | "completed";

const statusFromColumn: Record<ColumnId, Task["status"]> = {
  "in-queue": "thinking", // you can set "planning" instead if you prefer
  "in-progress": "executing",
  "waiting-for-you": "checking",
  completed: "completed",
};

function Column({
  id,
  title,
  icon,
  children,
  count,
}: {
  id: ColumnId;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  count: number;
}) {
  const { setNodeRef, isOver } = useDroppable({ id });
  return (
    <div
      ref={setNodeRef}
      className={`progress-section${isOver ? " is-over" : ""}`}
      data-column={id}
    >
      <div className="progress-heading">
        <div className="progress-label">
          {icon}
          <p>{title}</p>
        </div>
        <p>({count})</p>
      </div>
      {children}
    </div>
  );
}

const TaskProgress: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  const { editTask } = useContext(TaskContext) as TaskContextType;

  // Pre-filter tasks for each column (memoized for perf)
  const { inQueue, inProgress, waitingForYou, completed } = useMemo(() => {
    return {
      inQueue: tasks.filter(
        (t) => t.status === "thinking" || t.status === "planning"
      ),
      inProgress: tasks.filter((t) => t.status === "executing"),
      waitingForYou: tasks.filter((t) => t.status === "checking"),
      completed: tasks.filter((t) => t.status === "completed"),
    };
  }, [tasks]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const task = active.data.current?.task as Task | undefined;
    if (!task) return;

    // Only respond to drops on columns
    const targetColumn = over.id as ColumnId;
    const next = statusFromColumn[targetColumn];
    if (!next || next === task.status) return;

    editTask(task.id, { ...task, status: next });
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="task-progress-container">
        <Column
          id="in-queue"
          title="In Queue"
          icon={
            <AccessTimeOutlinedIcon fontSize="small" sx={{ color: "gray" }} />
          }
          count={inQueue.length}
        >
          {inQueue.map((task) => (
            <ProgressCard task={task} key={task.id} />
          ))}
        </Column>

        <Column
          id="in-progress"
          title="In Progress"
          icon={
            <AutorenewRoundedIcon
              fontSize="small"
              sx={{ color: "lightblue" }}
            />
          }
          count={inProgress.length}
        >
          {inProgress.map((task) => (
            <ProgressCard task={task} key={task.id} />
          ))}
        </Column>

        <Column
          id="waiting-for-you"
          title="Waiting For You"
          icon={
            <WarningAmberOutlinedIcon
              fontSize="small"
              sx={{ color: "orange" }}
            />
          }
          count={waitingForYou.length}
        >
          {waitingForYou.map((task) => (
            <ProgressCard task={task} key={task.id} />
          ))}
        </Column>

        <Column
          id="completed"
          title="Completed"
          icon={
            <CheckCircleOutlinedIcon
              fontSize="small"
              sx={{ color: "#4bb543" }}
            />
          }
          count={completed.length}
        >
          {completed.map((task) => (
            <ProgressCard task={task} key={task.id} />
          ))}
        </Column>
      </div>
    </DndContext>
  );
};

export default TaskProgress;
