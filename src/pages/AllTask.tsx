import { useEffect, useState } from "react";
import clsx from "clsx";
import useTheme from "../hooks/useTheme";
import type { TaskType } from "../types/types";

const getFormattedDate = (date: Date) => date.toISOString().split("T")[0];

const getSurroundingDates = (centerDate: Date, range: number = 2) => {
  const dates: string[] = [];
  for (let i = -range; i <= range; i++) {
    const newDate = new Date(centerDate);
    newDate.setDate(centerDate.getDate() + i);
    dates.push(getFormattedDate(newDate));
  }
  return dates;
};

const AllTask = () => {
  const { theme } = useTheme();
  const [allTasks, setAllTasks] = useState<TaskType[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(
    getFormattedDate(new Date())
  );
  const [availableDates, setAvailableDates] = useState<string[]>(
    getSurroundingDates(new Date())
  );

  useEffect(() => {
    const tasksFromStorage = localStorage.getItem("alltask");
    if (tasksFromStorage) {
      const parsedTasks = JSON.parse(tasksFromStorage).map(
        (task: TaskType) => ({
          ...task,
          date: new Date(task.date),
        })
      );
      setAllTasks(parsedTasks);
    }
  }, []);

  const filteredTasks = allTasks.filter(
    (task) => getFormattedDate(task.date) === selectedDate
  );

  return (
    <div
      className={clsx(
        "w-full h-full flex flex-col items-center pt-14 px-4 gap-6",
        theme === "dark" ? "text-white" : "text-black"
      )}
    >
      {/* Date Selector */}
      <div className="flex gap-2 overflow-x-auto">
        {availableDates.map((date) => (
          <button
            key={date}
            onClick={() => setSelectedDate(date)}
            className={clsx(
              "px-4 py-2 rounded-full border text-sm",
              selectedDate === date
                ? theme === "dark"
                  ? "bg-white text-black border-white"
                  : "bg-black text-white border-black"
                : theme === "dark"
                ? "border-white"
                : "border-black"
            )}
          >
            {new Date(date).toLocaleDateString()}
          </button>
        ))}
      </div>

      {/* Task List */}
      <div className="w-full max-w-md flex flex-col gap-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task, index) => (
            <div
              key={index}
              className={clsx(
                "p-4 rounded-md shadow-md",
                theme === "dark" ? "bg-neutral-800" : "bg-white"
              )}
            >
              <h3 className="font-bold text-lg">{task.task}</h3>
              <p className="text-sm">Priority: {task.priority}</p>
              <p className="text-sm">
                Date: {new Date(task.date).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No tasks for this day</p>
        )}
      </div>

      {/* Full Calendar Picker */}
      <div className="mt-8">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => {
            const picked = getFormattedDate(new Date(e.target.value));
            setSelectedDate(picked);
            setAvailableDates(getSurroundingDates(new Date(picked)));
          }}
          className={clsx(
            "p-2 rounded-md",
            theme === "dark"
              ? "bg-neutral-800 text-white"
              : "bg-white text-black"
          )}
        />
      </div>
    </div>
  );
};

export default AllTask;
