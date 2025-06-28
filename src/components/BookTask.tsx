import { Bookmark, BrushCleaning } from "lucide-react";
import useTasks from "../store/tasksStore";

export default function BookTask() {
  const { tasks, bookmark } = useTasks();
  const bookTask = tasks.filter((t) => bookmark.includes(t.id));

  return (
    <div className="w-full flex flex-col h-52">
      <div className="w-full flex gap-2 items-center justify-center bg-neutral-400 rounded-md cursor-pointer">
        <p className="text-center font-bold text-black">Book</p>
        <Bookmark size={20} color="#dcfce7" strokeWidth={3} />
      </div>
      <div>
        {bookTask.length > 0 ? (
          bookTask.map((t) => (
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
