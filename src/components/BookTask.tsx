import { Bookmark } from "lucide-react";

export default function BookTask() {
  return (
    <div className="w-full flex flex-col h-52">
      <div className="w-full flex gap-2 items-center justify-center bg-neutral-400 rounded-md cursor-pointer">
        <p className="text-center font-bold text-black">Book</p>
        <Bookmark size={20} color="#dcfce7" strokeWidth={3} />
      </div>
    </div>
  );
}
