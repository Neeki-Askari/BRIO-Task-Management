import type { Task } from "./contexts";

export const mockInitialTasks: Task[] = [
  {
    id: crypto.randomUUID(),
    summary: "Brainstorm Ideas",
    description:
      "Write a long medical research paper and create a one page summary with key findings, and clinical implications.",
    status: "thinking",
    timeAdded: "08:30 AM",
  },
  {
    id: crypto.randomUUID(),
    summary: "Outline Plan",
    description: "Draft a step-by-step plan for execution.",
    status: "planning",
    timeAdded: "08:30 AM",
  },
  {
    id: crypto.randomUUID(),
    summary: "Develop Feature",
    description: "Implement the main feature as described in the plan.",
    status: "executing",
    timeAdded: "08:30 AM",
  },
  {
    id: crypto.randomUUID(),
    summary: "Review Implementation",
    description: "Check the developed feature for bugs and improvements.",
    status: "checking",
    timeAdded: "08:30 AM",
  },
  {
    id: crypto.randomUUID(),
    summary: "Finalize and Deploy",
    description: "Complete the project and deploy to production.",
    status: "completed",
    timeAdded: "08:30 AM",
  },
];
