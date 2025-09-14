import type { Task } from "../../../ context/contexts";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ProgressCard from "./ProgressCard";

const TaskProgress: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  const progressContainers = [
    {
      container: "In Queue",
      icon: <AccessTimeOutlinedIcon fontSize="small" sx={{ color: "gray" }} />,
      tasks: tasks.filter(
        (task) => task.status === "thinking" || task.status === "planning"
      ),
    },
    {
      container: "In Progress",
      icon: (
        <AutorenewRoundedIcon fontSize="small" sx={{ color: "lightblue" }} />
      ),
      tasks: tasks.filter((task) => task.status === "executing"),
    },
    {
      container: "Waiting For You",
      icon: (
        <WarningAmberOutlinedIcon fontSize="small" sx={{ color: "orange" }} />
      ),
      tasks: tasks.filter((task) => task.status === "checking"),
    },
    {
      container: "Completed",
      icon: (
        <CheckCircleOutlinedIcon fontSize="small" sx={{ color: "#4bb543" }} />
      ),
      tasks: tasks.filter((task) => task.status === "completed"),
    },
  ];
  return (
    <div className="task-progress-container">
      {progressContainers.map((progress) => {
        return (
          <div className="progress-section">
            <div className="progress-heading">
              <div className="progress-label">
                {progress.icon}
                <p>{progress.container}</p>
              </div>
              <p>({progress.tasks.length})</p>
            </div>
            {progress.tasks.map((task, i) => (
              <ProgressCard task={task} key={i} />
            ))}
          </div>
        );
      })}
    </div>
  );
};
export default TaskProgress;
