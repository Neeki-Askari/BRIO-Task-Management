import type { Task } from "../../../ context/contexts";
import CompletedTaskCard from "./CompletedTaskCard";
import "./completedTasksStyles.scss";

const CompletedTasks: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  return (
    <div className="completed-tasks-outer-container">
      {tasks.map((task, i) => (
        <CompletedTaskCard task={task} key={i} />
      ))}
    </div>
  );
};

export default CompletedTasks;
