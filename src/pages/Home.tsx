import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Home() {
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
      <nav className="flex gap-[1px]">
        {focusDate.map((date, index) => (
          <div
            onClick={() => {
              setSelectedDate(date);
              console.log(selectedDate);
            }}
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
      </nav>
    </div>
  );
}
