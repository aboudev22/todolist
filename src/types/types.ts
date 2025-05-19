type User = {
  name: string;
  email: string;
  password: string;
};

type TaskType = {
  task: string;
  priority: PriorityType;
  date: Date;
};

type authContextType = {
  isConnected: boolean;
  toggleConnected: () => void;
};

type ThemeType = "light" | "dark";

type ThemeContexteType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

type PriorityType = "low" | "medium" | "high";

export type {
  User,
  authContextType,
  PriorityType,
  ThemeType,
  ThemeContexteType,
  TaskType,
};
