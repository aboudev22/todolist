import { motion } from "framer-motion";
import { BrushCleaning, Pin } from "lucide-react";
import useTasks from "../store/tasksStore";

export default function PinTask() {
  const { pin, tasks } = useTasks();
  const pinned = tasks.filter((t) => {
    pin.includes(t.id);
  });

  return (
    <motion.div
      initial={false}
      animate={{ height: pin.length > 0 ? "auto" : "80px" }}
      className="w-full flex flex-col h-24"
    >
      <div className="w-full flex gap-2 items-center justify-center bg-neutral-400 rounded-md cursor-pointer">
        <p className="text-center font-bold text-black">pin</p>
        <Pin size={20} color="#dcfce7" strokeWidth={3} />
      </div>
      {pin.length > 0 ? (
        pinned.map((t) => <p>{t.description.slice(0, 8)}</p>)
      ) : (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <BrushCleaning size={20} strokeWidth={1} color="#737373" />
          <p className="text-xs text-neutral-500">empty</p>
        </div>
      )}
    </motion.div>
  );
}
