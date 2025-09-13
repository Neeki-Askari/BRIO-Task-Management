import { createContext } from "react";
import type { LinkButton } from "./navContext";

export type ActiveTabContextType = {
  linkNavigationButtons: LinkButton[];
  setActiveTab: (name: string) => void;
};
export const ActiveTabContext = createContext<ActiveTabContextType | undefined>(
  undefined
);

export type Task = {
  id: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
};

export type TaskContextType = {
  tasks: Task[];
  addTask: (description: string) => void;
  removeTask: (id: string) => void;
  editTask: (id: string, updatedTask: Partial<Omit<Task, "id">>) => void;
};

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);
