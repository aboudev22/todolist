import { useNavigate } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import clsx from "clsx";

export default function AddTaskButton() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/AddTask")}
      className={clsx(
        "rounded-md font-bold text-2xl p-2 px-4 lg:bottom-28 lg:right-24 absolute bottom-12 right-8 cursor-pointer",
        theme === "dark"
          ? "bg-stone-200 shadow-2xl active:bg-stone-300 text-black shadow-neutral-800"
          : "bg-black shadow-2xl active:bg-black/85 text-white shadow-black"
      )}
    >
      +
    </button>
  );
}
