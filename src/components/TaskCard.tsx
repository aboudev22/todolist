import clsx from "clsx";
import { Trash } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import useTasks from "../hooks/useTasks";
import type { TaskProps } from "../types/types";

interface taskCardProps extends TaskProps {
  variants: Variants;
}

export default function TaskCard({
  description,
  finished,
  id,
  priority,
  variants,
}: taskCardProps) {
  const { dispatch } = useTasks();
  const handleChecked = () => {
    dispatch({ type: "toggle", payload: id });
  };
  const handleDelete = () => {
    dispatch({ type: "remove", payload: id });
  };
  return (
    <motion.div
      layout
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.3, ease: "backIn" }}
      variants={variants}
      className="flex items-center gap-2 w-sm bg-red-500 font-bold text-xs p-2"
    >
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
          onClick={handleDelete}
          size={16}
          className="cursor-pointer hover:rotate-12 transition text-white"
        />
      </div>
    </motion.div>
  );
}
