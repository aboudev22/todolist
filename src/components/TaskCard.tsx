import type { TaskProps } from "../types/types";
import clsx from "clsx";
import useTasks from "../hooks/useTasks";
import { Trash } from "lucide-react";

export default function TaskCard({
  description,
  finished,
  id,
  priority,
}: TaskProps) {
  const { dispatch } = useTasks();
  const handleChecked = () => {
    dispatch({ type: "toggle", payload: id });
  };
  return (
    <div className="flex items-center gap-2 w-sm bg-red-500 font-bold text-xs p-2">
      <input
        className="cursor-pointer w-10"
        type="checkbox"
        checked={finished}
        onChange={handleChecked}
      />
      <p
        className={clsx(
          "text-xs flex-1",
          finished ? "decoration-1 line-through text-white/70" : "text-white"
        )}
      >
        {description}
      </p>
      <div className="flex items-center gap-1">
        <p
          className={clsx(
            "text-xs rounded-xs p-1",
            priority === "low" ? "bg-gray-300" : "",
            priority === "medium" ? "bg-white" : "",
            priority === "high" ? "bg-yellow-300" : ""
          )}
        >
          {priority}
        </p>

        <Trash
          onClick={() => dispatch({ type: "remove", payload: id })}
          size={16}
          className="cursor-pointer hover:rotate-12 transition text-white"
        />
      </div>
    </div>
  );
}
