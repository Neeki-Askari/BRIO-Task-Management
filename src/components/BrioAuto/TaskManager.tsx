import "../../styles/brioAuto.scss";
import type { Task } from "../../ context/contexts";
import { useState } from "react";
import { Button } from "@mui/material";
import AddedTasksCard from "./AddedTasks/AddedTasksCard";
import TaskProgress from "./TaskProgress/TaskProgress";

const tabs = [
  { label: "Added Tasks", key: "all" },
  { label: "Task Progress", key: "pending" },
  { label: "Completed Tasks", key: "completed" },
];

const TaskManager: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  const renderContent = () => {
    switch (activeTab) {
      case "completed":
        return <div>Completed</div>;
      case "pending":
        return <TaskProgress tasks={tasks} />;
      default:
        return <AddedTasksCard tasks={tasks} />;
    }
  };
  return (
    <div className="task-manager-container">
      <div className="tab-list">
        {tabs.map((tab) => (
          <Button
            key={tab.key}
            className={activeTab === tab.key ? "active" : ""}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default TaskManager;
