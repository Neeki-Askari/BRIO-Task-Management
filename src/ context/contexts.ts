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
  id: number;
  summary: string;
  description: string;
  timeAdded: string;
  status: "thinking" | "planning" | "executing" | "checking" | "completed";
};

export type TaskContextType = {
  tasks: Task[];
  addTask: (description: string) => void;
  removeTask: (id: number) => void;
  editTask: (id: number, updatedTask: Partial<Omit<Task, "id">>) => void;
};

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);
