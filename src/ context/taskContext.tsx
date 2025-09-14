import { useState, type ReactNode } from "react";
import { TaskContext, type Task } from "./contexts";
import { mockInitialTasks } from "./mockData";

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(mockInitialTasks);

  const addTask = (description: string) => {
    setTasks((prev) => [
      ...prev,
      {
        description,
        id: tasks.length + 1,
        status: "thinking",
        summary: "Task summary",
        timeAdded: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  };

  const removeTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const editTask = (id: number, updatedTask: Partial<Omit<Task, "id">>) => {
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
