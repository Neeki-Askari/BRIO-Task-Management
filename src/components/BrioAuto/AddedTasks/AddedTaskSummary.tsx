import { LinearProgress } from "@mui/material";
import type { Task } from "../../../ context/contexts";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
const statusOrder = [
  "thinking",
  "planning",
  "executing",
  "checking",
  "completed",
];

const statusToSummary = {
  thinking: "Think",
  planning: "Plan",
  executing: "Create",
  checking: "Check",
  completed: "Deliver",
};

const AddedTaskSummary: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  let lastAllCompletedIdx = -1;
  for (let i = 0; i < statusOrder.length; i++) {
    const allCompleted = tasks.every(
      (task) => statusOrder.indexOf(task.status) >= i
    );
    if (allCompleted) {
      lastAllCompletedIdx = i;
    } else {
      break;
    }
  }
  return (
    <div className="task-summary">
      <div className="task-summary-heading">
        <TrackChangesOutlinedIcon fontSize="small" />
        <p>Today's Task Progress Summary</p>
      </div>
      <div className="summary-timeline">
        {statusOrder.map((step, i) => {
          let stepClass = "";
          let stepLabel = "";
          if (i <= lastAllCompletedIdx) {
            stepClass = "success";
            stepLabel = "Done";
          } else if (i === lastAllCompletedIdx + 1) {
            stepClass = "in-progress";
            stepLabel = "In Progress";
          } else {
            stepClass = "pending";
            stepLabel = "Pending";
          }
          return (
            <div key={step} className="summary-step">
              <div className="timeline-content">
                <div className={`timeline-line ${stepClass}`}></div>
                <div className="task-info">
                  <div className={`step-and-label ${stepClass}`}>
                    <p className="step-name">
                      {statusToSummary[step as keyof typeof statusToSummary]}
                    </p>
                    <p className={`label ${stepClass}`}>{stepLabel}</p>
                  </div>
                  <p className="description">Description</p>
                </div>
              </div>
              <p className="time">08:30 AM</p>
            </div>
          );
        })}
      </div>
      <div className="summary-progress-bar">
        <div className="progress-bar-header">
          <p>Overall progress</p>
          <p>30%</p>
        </div>
        <LinearProgress variant="determinate" value={30} />
      </div>
    </div>
  );
};

export default AddedTaskSummary;
