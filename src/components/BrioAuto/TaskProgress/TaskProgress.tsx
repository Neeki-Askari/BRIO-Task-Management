import type { Task } from "../../../ context/contexts";

const TaskProgress: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  const progressContainers = [
    {
      container: "In Queue",
      tasks: tasks.filter(
        (task) => task.status === "thinking" || task.status === "planning"
      ),
    },
    {
      container: "In Progress",
      tasks: tasks.filter((task) => task.status === "executing"),
    },
    {
      container: "Waiting For You",
      tasks: tasks.filter((task) => task.status === "checking"),
    },
    {
      container: "Completed",
      tasks: tasks.filter((task) => task.status === "completed"),
    },
  ];
  return (
    <div className="task-progress-container">
      {progressContainers.map((progress) => {
        return <div>{progress.container} </div>;
      })}
    </div>
  );
};
export default TaskProgress;
