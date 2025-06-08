import type { TaskProps } from "../types/types";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import useTasks from "../hooks/useTasks";
import { Trash } from "lucide-react";
import { useState } from "react";

export default function TaskCard({
  description,
  finished,
  id,
  priority,
}: TaskProps) {
  const { dispatch } = useTasks();
  const [isVisible, setIsvisible] = useState(true);
  const handleChecked = () => {
    dispatch({ type: "toggle", payload: id });
  };
  const handleDelete = () => {
    setIsvisible(false);
    setTimeout(() => {
      dispatch({ type: "remove", payload: id });
    }, 700);
  };
  return (
    <div>
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 1 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
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
                finished
                  ? "decoration-1 line-through text-white/70"
                  : "text-white"
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
        ) : null}
      </AnimatePresence>
    </div>
  );
}
