import { createContext, useState, type ReactNode } from "react";

export type Task = {
  id: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
};

type TaskContextType = {
  tasks: Task[];
  addTask: (task: Omit<Task, "id">) => void;
  removeTask: (id: string) => void;
  editTask: (id: string, updatedTask: Partial<Omit<Task, "id">>) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Omit<Task, "id">) => {
    setTasks((prev) => [
      ...prev,
      { ...task, id: crypto.randomUUID() },
    ]);
  };

  const removeTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const editTask = (id: string, updatedTask: Partial<Omit<Task, "id">>) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};