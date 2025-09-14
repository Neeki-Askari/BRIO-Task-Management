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
  return (
    <div className="progress-card">
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
