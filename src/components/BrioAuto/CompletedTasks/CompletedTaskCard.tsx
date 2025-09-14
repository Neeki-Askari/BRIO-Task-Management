import "./completedTasksStyles.scss";
import type { Task } from "../../../ context/contexts";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const CompletedTaskCard: React.FC<{ task: Task }> = ({ task }) => {
  return (
    <div className="completed-card-container">
      <div className="completed-header">
        <div className="icon-container">
          <MenuBookIcon />
        </div>
        <p>{task.timeAdded}</p>
      </div>
      <div className="task-name">
        <CircleIcon id="circle-icon" fontSize="small" />
        <p>{task.summary}</p>
      </div>
      <p className="completed-task-summary">{task.description}</p>
      {task.details && <p className="completed-task-details">{task.details}</p>}
      <div className="completed-footer">
        <div className="completed-label">
          <CheckCircleOutlinedIcon fontSize="small" />
          <p>Completed</p>
        </div>
        <ArrowCircleRightIcon />
      </div>
    </div>
  );
};

export default CompletedTaskCard;
