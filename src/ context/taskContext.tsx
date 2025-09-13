import { useState, type ReactNode } from "react";
import { TaskContext, type Task } from "./contexts";

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (description: string) => {
    setTasks((prev) => [
      ...prev,
      { description, id: crypto.randomUUID(), status: "pending" },
    ]);
  };

  const removeTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const editTask = (id: string, updatedTask: Partial<Omit<Task, "id">>) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};
