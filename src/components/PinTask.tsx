import { Pin } from "lucide-react";

export default function PinTask() {
  return (
    <div className="w-full flex flex-col h-24">
      <div className="w-full flex gap-2 items-center justify-center bg-neutral-400 rounded-md cursor-pointer">
        <p className="text-center font-bold text-black">pin</p>
        <div>
          <Pin size={20} color="#dcfce7" strokeWidth={3} />
        </div>
      </div>
    </div>
  );
}
