import "./brioAuto.scss";
import type { Task } from "../../ context/contexts";
import { useState } from "react";
import { Button } from "@mui/material";
import AddedTasks from "./AddedTasks/AddedTasks";
import TaskProgress from "./TaskProgress/TaskProgress";
import CompletedTasks from "./CompletedTasks/CompletedTasks";

const tabs = [
  { label: "Added Tasks", key: "all" },
  { label: "Task Progress", key: "pending" },
  { label: "Completed Tasks", key: "completed" },
];

const TaskManager: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  const completedTasks = tasks.filter((task) => task.status === "completed");

  const renderContent = () => {
    switch (activeTab) {
      case "completed":
        return <CompletedTasks tasks={completedTasks} />;
      case "pending":
        return <TaskProgress tasks={tasks} />;
      default:
        return <AddedTasks tasks={tasks} />;
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
