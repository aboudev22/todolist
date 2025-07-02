import { create } from "zustand";
import { persist } from "zustand/middleware";

type TaskType = {
  description: string;
  finished: boolean;
  id: number;
  date: Date;
};

interface TaskStore {
  tasks: TaskType[];
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
  addTask: (task: TaskType) => void;
}

const useTasks = create(
  persist<TaskStore>(
    (set) => ({
      tasks: [],

      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === id ? { ...t, finished: !t.finished } : t
          ),
        })),
      addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
      removeTask: (id) =>
        set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),
    }),
    {
      name: "user-tasks",
    }
  )
);

export default useTasks;
