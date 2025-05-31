import { useContext } from "react";
import { TaskContext } from "../context/TasksContext";

export default function useTasks() {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}
