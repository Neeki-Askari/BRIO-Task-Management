import { IconButton } from "@mui/material";
import {
  TaskContext,
  type Task,
  type TaskContextType,
} from "../../../ context/contexts";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useContext } from "react";
import LinearProgress, {
  type LinearProgressProps,
} from "@mui/material/LinearProgress";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const statusToProgress = (status: Task["status"]) => {
  switch (status) {
    case "thinking":
      return 0;
    case "planning":
      return 0;
    case "executing":
      return 60;
    case "checking":
      return 85;
    case "completed":
      return 100;
    default:
      return 0;
  }
};

const ProgressCard: React.FC<{ task: Task }> = ({ task }) => {
  const { removeTask } = useContext(TaskContext) as TaskContextType;
  const LinearProgressWithLabel = (
    props: LinearProgressProps & { value: number }
  ) => {
    return (
      <div className="progress-bar">
        <div className="progress-bar-heading">
          <p>Progress</p>
          <p>{`${Math.round(props.value)}%`}</p>
        </div>
        <div>
          <LinearProgress
            className={`value-${task.status}`}
            variant="determinate"
            {...props}
          />
        </div>
      </div>
    );
  };

  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: task.id,
      data: { task },
    });
  const style: React.CSSProperties = {
    transform: transform ? CSS.Translate.toString(transform) : undefined,
    cursor: isDragging ? "grabbing" : "grab",
    opacity: isDragging ? 0.9 : 1,
    boxShadow: isDragging ? "0 10px 24px rgba(0,0,0,0.18)" : undefined,
  };
  return (
    <div
      ref={setNodeRef}
      className={`progress-card${isDragging ? " dragging" : ""}`}
      {...listeners}
      {...attributes}
      style={style}
    >
      <div className="header">
        <p>Task {task.id + 1}</p>
        <IconButton onClick={() => removeTask(task.id)}>
          <DeleteOutlinedIcon fontSize="small" />
        </IconButton>
      </div>
      <div className="description">{task.description}</div>
      <div className="progress-container">
        <LinearProgressWithLabel value={statusToProgress(task.status)} />
      </div>
    </div>
  );
};

export default ProgressCard;
