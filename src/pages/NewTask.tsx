import clsx from "clsx";
import Button from "../components/ui/Button";
import { useRef, useState } from "react";
import { CalendarDays } from "lucide-react";

export default function NewTask() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const refForm = useRef<HTMLInputElement | null>(null);
  const addTask = () => {};
  const triggerDatePicker = () => {
    if (refForm.current) {
      refForm.current.showPicker();
    }
  };
  const handleDatePickedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(() => {
      const dateValue = e.target.value;
      const newDate = dateValue ? new Date(dateValue) : new Date();
      return newDate;
    });
  };
  return (
    <div className="dark:bg-neutral-900 bg-amber-50 w-screen h-screen flex flex-col items-center pt-8">
      <form className="gap-2 flex flex-col md:flex-row">
        <input
          type="text"
          placeholder="new task"
          className="bg-black/5 dark:bg-transparent font-bold outline-1 active:outline-1 dark:outline-red-500 p-2 rounded-md w-sm dark:text-white placeholder:dark:text-white"
        />
        <Button variant="red" text="add" onClick={addTask} />
        <select
          className={clsx(
            "text-white font-bold text-xs h-full bg-red-500 rounded-md flex justify-center"
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
          className="h-full flex justify-center items-center px-1 bg-red-500 dark:border-white rounded-md cursor-pointer"
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
