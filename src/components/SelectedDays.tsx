import clsx from "clsx";

const daysLabels = ["S", "M", "T", "W", "T", "F", "S"];

export default function SelectedDays({
  date,
  selected,
  handleSelected,
}: {
  date: Date;
  selected: Date;
  handleSelected: (date: Date) => void;
}) {
  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - date.getDay());

  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    return d;
  });

  return (
    <div className="flex items-center justify-between">
      {days.map((day, idx) => (
        <div
          onClick={() => handleSelected(day)}
          className="flex flex-col cursor-pointer"
          key={idx}
        >
          <p className="text-center font-bold">{daysLabels[idx]}</p>
          <p
            className={clsx(
              "text-center py-1 px-2 rounded-full font-bold",
              day.getDate() === selected.getDate() ? "bg-blue-500" : ""
            )}
          >
            {day.getDate()}
          </p>
        </div>
      ))}
    </div>
  );
}
