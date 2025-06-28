type PriorityType = "low" | "medium" | "urgent";

type TasksProps = {
  description: string;
  finished: boolean;
  date: Date;
  id: number;
  priority: PriorityType;
};

export type { PriorityType, TasksProps };
