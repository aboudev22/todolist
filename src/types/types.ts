import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "../components/style/button";
import type { ReactNode } from "react";

type ThemeType = "dark" | "light";

type ThemeProps = {
  toggleTheme: () => void;
  theme: ThemeType;
};

type ButtonProps = {
  variant: "simple" | "red" | "black";
  text?: string;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
} & VariantProps<typeof buttonVariants>;

type PriorityType = "low" | "medium" | "high";

type TaskProps = {
  description: string;
  finished: boolean;
  date: Date;
  id: number;
  priority: PriorityType;
};

type TaskActionType =
  | { type: "remove"; payload: number }
  | { type: "toggle"; payload: number }
  | { type: "edit"; payload: { description: string; id: number } }
  | { type: "add"; payload: TaskProps };

type TaskContextType = {
  tasks: TaskProps[];
  dispatch: React.Dispatch<TaskActionType>;
};

export type {
  ThemeProps,
  ButtonProps,
  ThemeType,
  TaskProps,
  TaskActionType,
  TaskContextType,
  PriorityType,
};
