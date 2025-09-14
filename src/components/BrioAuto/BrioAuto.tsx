import { useContext, useEffect } from "react";
import "./brioAuto.scss";
import AddNewTask from "./AddNewTask";
import BrioAutoHeader from "./BioAutoHeader";
import { TaskContext, type TaskContextType } from "../../ context/contextTypes";
import TaskManager from "./TaskManager";

const BrioAuto: React.FC = () => {
  const { tasks } = useContext(TaskContext) as TaskContextType;

  useEffect(() => {
    console.log("Current Tasks:", tasks);
  }, [tasks]);
  return (
    <div className="brio-auto-outer-container">
      <BrioAutoHeader />
      <AddNewTask />
      <TaskManager tasks={tasks} />
    </div>
  );
};

export default BrioAuto;
