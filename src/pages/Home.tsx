import clsx from "clsx";
import { CalendarDays } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const dateRef = useRef<HTMLInputElement | null>(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [focusDate, setFocusDate] = useState<Date[]>([]);

  useEffect(() => {
    const dates: Date[] = [];
    for (let i = -2; i <= 2; i++) {
      const newDate = new Date(selectedDate);
      newDate.setDate(selectedDate.getDate() + i);
      dates.push(newDate);
    }
    setFocusDate(dates);
  }, [selectedDate]);

  const handleDatePickedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(() => {
      const dateValue = e.target.value;
      const newDate = dateValue ? new Date(dateValue) : new Date();
      return newDate;
    });
  };

  const triggerDatePicker = () => {
    if (dateRef.current) {
      dateRef.current.showPicker();
    }
  };

  const isSameDay = (d1: Date, d2: Date) =>
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear();

  return (
    <div
      className={clsx(
        "w-screen h-screen flex flex-col items-center dark:bg-neutral-900 bg-amber-50 p-4 transition-all duration-300"
      )}
    >
      <nav className="flex items-center gap-[1px]">
        {focusDate.map((date, index) => (
          <div
            onClick={() => setSelectedDate(date)}
            key={index}
            className={clsx(
              "font-bold text-xs text-neutral-900 rounded-md p-2 cursor-pointer transition-all duration-300",
              isSameDay(date, selectedDate)
                ? "dark:bg-red-500 dark:text-white bg-black text-white"
                : "bg-transparent border-[1px] dark:border-white dark:text-white border-black"
            )}
          >
            {date.toDateString()}
          </div>
        ))}
        <form
          onClick={triggerDatePicker}
          className="h-full flex justify-center items-center px-1 bg-black dark:bg-red-500 dark:border-white rounded-md"
        >
          <CalendarDays className="border-[1] rounded-md font-light stroke-2 text-red text-white cursor-pointer" />
          <input
            type="date"
            ref={dateRef}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleDatePickedChange(e)
            }
            value={selectedDate.toISOString().split("T")[0]}
            className="absolute -z-50 opacity-0"
          />
        </form>
      </nav>
    </div>
  );
}
