import CircleIcon from "@mui/icons-material/Circle";
import LinearProgress, {
  type LinearProgressProps,
} from "@mui/material/LinearProgress";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { IconButton } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import {
  TaskContext,
  type Task,
  type TaskContextType,
} from "../../../ context/contextTypes";
import { useContext } from "react";

const AddedTaskCard: React.FC<{ task: Task }> = ({ task }) => {
  const { removeTask } = useContext(TaskContext) as TaskContextType;
  const statusToProgress = (status: Task["status"]) => {
    switch (status) {
      case "thinking":
        return 10;
      case "planning":
        return 30;
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

  const statusOrder = [
    "thinking",
    "planning",
    "executing",
    "checking",
    "completed",
  ];

  const LinearProgressWithLabel = (
    props: LinearProgressProps & { value: number }
  ) => {
    return (
      <div className="progress-bar">
        <p>{`${Math.round(props.value)}%`}</p>
        <div>
          <LinearProgress variant="determinate" {...props} />
        </div>
      </div>
    );
  };

  return (
    <div key={task.id} className="task-card">
      <div className="top-summary-info">
        <div className="left-section">
          <CircleIcon id="circle-icon" />
          <p>{task.summary}</p>
          <p>|</p>
          <p>{task.timeAdded}</p>
          <p>|</p>
          <LinearProgressWithLabel value={statusToProgress(task.status)} />
        </div>
        <IconButton onClick={() => removeTask(task.id)}>
          <DeleteOutlinedIcon fontSize="small" />
        </IconButton>
      </div>
      <p className="task-description">{task.description}</p>
      <div className="horizontal-progress-timeline">
        {statusOrder.map((status, i) => {
          const isCurrent = status === task.status;
          const isCompleted = i < statusOrder.indexOf(task.status);
          const isPending = i > statusOrder.indexOf(task.status);
          return (
            <div
              className={`status isCurrent-${isCurrent} isPending-${isPending} isCompleted-${isCompleted}`}
              key={i}
            >
              <p>
                {(isCurrent || isCompleted) && (
                  <CheckCircleOutlinedIcon fontSize="small" />
                )}
                {isPending && <AccessTimeIcon fontSize="small" />}
                {status}
              </p>
              {i < statusOrder.length - 1 && (
                <div
                  className={`line isCurrent-${isCurrent} isPending-${isPending} isCompleted-${isCompleted}`}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddedTaskCard;
