import type { Task } from "./contextTypes";

export const mockInitialTasks: Task[] = [
  {
    id: 0,
    summary: "Brainstorm Ideas",
    description:
      "Write a long medical research paper and create a one page summary with key findings, and clinical implications.",
    status: "thinking",
    timeAdded: "08:30 AM",
  },
  {
    id: 1,
    summary: "Outline Plan",
    description: "Draft a step-by-step plan for execution.",
    status: "planning",
    timeAdded: "08:30 AM",
  },
  {
    id: 2,
    summary: "Develop Feature",
    description: "Implement the main feature as described in the plan.",
    status: "executing",
    timeAdded: "08:30 AM",
  },
  {
    id: 3,
    summary: "Review Implementation",
    description: "Check the developed feature for bugs and improvements.",
    status: "checking",
    timeAdded: "08:30 AM",
  },
  {
    id: 4,
    summary: "Finalize and Deploy",
    description: "Complete the project and deploy to production.",
    status: "completed",
    timeAdded: "08:30 AM",
  },
  {
    id: 5,
    summary: "Finalize and Deploy",
    description: "Complete the project and deploy to production.",
    details:
      "Research React Redux stores and create an example project. Show your summary, findings, and what you learned. Be prepared to give a demo.",
    status: "completed",
    timeAdded: "08:30 AM",
  },
];
