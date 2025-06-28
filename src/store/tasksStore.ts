import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { TasksProps } from "../types/types";

interface TasksState {
  tasks: TasksProps[];
  pin: number[];

  addTask: (task: TasksProps) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const useTasks = create(
  persist<TasksState>(
    (set) => ({
      tasks: [],
      pin: [],

      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
        })),

      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === id ? { ...t, finished: !t.finished } : t
          ),
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((t) => t.id !== id),
        })),
    }),
    {
      name: "user-tasks",
    }
  )
);

export default useTasks;