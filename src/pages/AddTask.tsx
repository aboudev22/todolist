import clsx from "clsx";
import { useEffect, useState } from "react";
import useTheme from "../hooks/useTheme";
import type { PriorityType, TaskType } from "../types/types";

export default function AddTask() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<TaskType[]>(() => {
    const savedTasks = localStorage.getItem("alltask");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [priority, setPriority] = useState<PriorityType>("low");
  const { theme } = useTheme();

  useEffect(() => {
    localStorage.setItem("alltask", JSON.stringify(tasks));
  }, [tasks]);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleAddingTask = () => {
    if (!task.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        task: task.trim(),
        date: new Date(date),
        priority,
      },
    ]);

    setTask("");
    setDate(new Date().toISOString().split("T")[0]);
    setPriority("low");
  };

  return (
    <div className="w-full flex flex-col justify-center items-center pt-14">
      <input
        type="text"
        name="task"
        onChange={handleValueChange}
        value={task}
        placeholder="Write your task"
        className={clsx(
          "p-2 outline w-sm",
          theme === "dark"
            ? "outline-white placeholder:text-white text-white"
            : "outline-black placeholder:text-black text-black"
        )}
      />

      <div className="flex justify-between mt-5 w-sm">
        <label
          htmlFor="date"
          className={clsx(theme === "dark" ? "text-white" : "text-black")}
        >
          Date
        </label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          className={clsx(
            theme === "dark"
              ? "text-white bg-transparent"
              : "text-black bg-transparent"
          )}
        />
      </div>

      <div className="flex justify-between mt-5 w-sm">
        <p className={clsx(theme === "dark" ? "text-white" : "text-black")}>
          Priority
        </p>
        <div className="flex gap-4">
          {["low", "medium", "high"].map((level) => (
            <label
              key={level}
              htmlFor={`priority-${level}`}
              className={clsx(
                "capitalize cursor-pointer",
                theme === "dark" ? "text-white" : "text-black"
              )}
            >
              <input
                id={`priority-${level}`}
                type="radio"
                name="priority"
                value={level}
                checked={priority === level}
                onChange={(e) => setPriority(e.target.value as PriorityType)}
                className="mr-1 cursor-pointer"
              />
              {level}
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={handleAddingTask}
        className={clsx(
          "font-bold p-2 w-sm cursor-pointer mt-8 rounded-md",
          theme === "dark"
            ? "bg-white text-black active:bg-white/90"
            : "bg-black text-white active:bg-black/90"
        )}
      >
        Add
      </button>
    </div>
  );
}
