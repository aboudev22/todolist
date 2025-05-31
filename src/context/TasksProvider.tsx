import { useEffect, useReducer, type ReactNode } from "react";
import type { TaskActionType, TaskProps } from "../types/types";
import { TaskContext } from "./TasksContext";

const initialeState: TaskProps[] = (() => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
})();

function reducer(state: TaskProps[], action: TaskActionType): TaskProps[] {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          description: action.payload.description,
          finished: false,
          id: Date.now(),
          date: action.payload.date,
          priority: action.payload.priority,
        },
      ];
    case "remove":
      return state.filter((tasks) => tasks.id !== action.payload);
    case "toggle":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, finished: !task.finished }
          : task
      );
    default:
      return state;
  }
}

export default function TasksProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialeState);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state));
  }, [state]);
  return (
    <TaskContext.Provider value={{ tasks: state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
