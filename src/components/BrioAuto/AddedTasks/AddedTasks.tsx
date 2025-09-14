import type { Task } from "../../../ context/contexts";
import "./addedTasks.scss";
import "./addedTasks.scss";
import AddedTaskCard from "./AddedTaskCard";
import AddedTaskSummary from "./AddedTaskSummary";

const AddedTasks: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  return (
    <div className="added-tasks-container">
      <div className="all-tasks-list">
        {[...tasks].reverse().map((task: Task) => (
          <AddedTaskCard task={task} />
        ))}
      </div>
      <AddedTaskSummary tasks={tasks} />
    </div>
  );
};

export default AddedTasks;
