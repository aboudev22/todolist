import clsx from "clsx";
import Button from "../components/ui/Button";
import { useRef, useState } from "react";
import { CalendarDays } from "lucide-react";
import useTasks from "../hooks/useTasks";
import type { PriorityType } from "../types/types";

export default function NewTask() {
  const { dispatch } = useTasks();
  const [priority, setPriority] = useState<PriorityType>("low");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const refForm = useRef<HTMLInputElement | null>(null);
  const addTask = () => {
    if (!description.trim()) return;
    const task = {
      id: Date.now(),
      finished: false,
      date: selectedDate,
      priority: priority,
      description: description.trim(),
    };
    dispatch({ type: "add", payload: task });
    setDescription("");
    setSelectedDate(new Date());
  };
  const triggerDatePicker = () => {
    if (refForm.current) {
      refForm.current.showPicker();
    }
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value as PriorityType);
  };

  const handleDatePickedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(() => {
      const dateValue = e.target.value;
      const newDate = dateValue ? new Date(dateValue) : new Date();
      return newDate;
    });
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  return (
    <div className="dark:bg-neutral-900 bg-amber-50 w-screen h-screen flex flex-col items-center p-8">
      <form className="gap-2 flex flex-wrap md:flex-row">
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="new task"
          className="bg-black/5 dark:bg-transparent font-bold outline-1 active:outline-1 dark:outline-red-500 p-2 rounded-md w-sm dark:text-white placeholder:dark:text-white"
        />
        <Button variant="red" text="add" onClick={addTask} />
        <select
          value={priority}
          onChange={handlePriorityChange}
          className={clsx(
            "text-white font-bold text-xs h-fit py-3 px-1 bg-red-500 rounded-md flex justify-center"
          )}
          name="priority"
          id="priority"
        >
          <option className="text-black dark:text-white rounded-md" value="low">
            low
          </option>
          <option
            className="text-black dark:text-white rounded-md"
            value="medium"
          >
            medium
          </option>
          <option
            className="text-black dark:text-white rounded-md"
            value="high"
          >
            high
          </option>
        </select>
        <div
          onClick={triggerDatePicker}
          className="flex justify-center h-10 py-3 px-1 items-center bg-red-500 dark:border-white rounded-md cursor-pointer"
        >
          <p className="text-white text-xs font-bold cursor-pointer">
            {selectedDate.toDateString()}
          </p>
          <CalendarDays className="border-[1] rounded-md font-light stroke-2 text-red text-white cursor-pointer" />
          <input
            type="date"
            ref={refForm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleDatePickedChange(e)
            }
            value={selectedDate.toISOString().split("T")[0]}
            className="absolute -z-50 opacity-0"
          />
        </div>
      </form>
    </div>
  );
}
