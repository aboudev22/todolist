import { BrushCleaning, CircleCheck } from "lucide-react";
import useTasks from "../store/tasksStore";

export default function FinishedTask() {
  const { tasks } = useTasks();
  const finished = tasks.filter((t) => t.finished);

  return (
    <div className="w-full flex flex-col h-24 ">
      <div className="w-full flex gap-2 items-center justify-center bg-neutral-400 rounded-md cursor-pointer">
        <p className="text-center font-bold text-black">Finished</p>

        <CircleCheck size={20} color="#dcfce7" strokeWidth={3} />
      </div>
      <div>
        {finished.length > 0 ? (
          finished.map((t) => (
            <div key={`finish-${t.id}`}>
              <p className="text-xs text-black">{t.description.slice(0, 5)}</p>
            </div>
          ))
        ) : (
          <div className="w-full h-full mt-1 flex flex-col justify-center items-center">
            <BrushCleaning size={20} strokeWidth={1} color="#737373" />
            <p className="text-xs text-neutral-500">empty</p>
          </div>
        )}
      </div>
    </div>
  );
}
