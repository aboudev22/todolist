import clsx from "clsx";
import { motion, type PanInfo } from "framer-motion";
import { Trash2 } from "lucide-react";
import { useRef, useState } from "react";

interface TaskCardProps {
  description: string;
  finished: boolean;
  id: number;
  date: Date;
  onDelete: (id: number) => void;
  onChange: (id: number) => void;
}

export default function TaskCard(props: TaskCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [direction, setDirection] = useState(1);

  const handleDrag = (
    _: TouchEvent | PointerEvent | MouseEvent,
    info: PanInfo
  ) => {
    if (!ref.current) return;
    if (info.offset.x > 0) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
  };

  const onDragEnd = (
    _: TouchEvent | PointerEvent | MouseEvent,
    info: PanInfo
  ) => {
    if (!ref.current) return;

    if (info.offset.x > 500 || info.offset.x < -500) {
      props.onDelete(props.id);
    }
  };

  return (
    <motion.div
      layout
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.4 } }}
      className="relative bg-red-500 rounded-lg"
    >
      <motion.div
        layout
        drag="x"
        exit={{ translateX: `${direction * 100}%` }}
        transition={{
          duration: 0.5,
          ease: "linear",
          transition: { duration: 0.4 },
        }}
        onDrag={handleDrag}
        onDragEnd={onDragEnd}
        dragConstraints={ref}
        ref={ref}
        dragMomentum={false}
        className="flex active:cursor-grabbing relative z-[5] justify-center px-6 py-3 gap-5 items-center bg-white rounded-md will-change-transform"
      >
        <input
          type="checkbox"
          onChange={() => props.onChange(props.id)}
          checked={props.finished}
          className="cursor-pointer scale-[150%]"
        />
        <p
          className={clsx(
            "text-sm font-bold flex-1",
            props.finished
              ? "line-through text-neutral-500"
              : "text-neutral-600"
          )}
        >
          {props.description}
        </p>
        <p className="text-sm font-bold text-neutral-700">
          {new Date(props.date).toDateString() ?? "Date inconnue"}
        </p>
      </motion.div>

      <div className="absolute z-[3] w-full top-0 bottom-0 flex justify-between items-center px-5">
        <div className="flex justify-center items-center gap-2">
          <Trash2
            size={25}
            color="white"
            onClick={() => props.onDelete(props.id)}
          />
          <p className="text-white text-sm font-bold"> swipe to delete</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="text-white text-sm font-bold">swipe to delete</p>
          <Trash2
            size={25}
            color="white"
            onClick={() => props.onDelete(props.id)}
          />
        </div>
      </div>
    </motion.div>
  );
}
