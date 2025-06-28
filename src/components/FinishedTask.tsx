import { CircleCheck } from "lucide-react";

export default function FinishedTask() {
  return (
    <div className="w-full flex flex-col h-24">
      <div className="w-full flex gap-2 items-center justify-center bg-neutral-400 rounded-md cursor-pointer">
        <p className="text-center font-bold text-black">Finished</p>

        <CircleCheck size={20} color="#dcfce7" strokeWidth={3} />
      </div>
    </div>
  );
}
