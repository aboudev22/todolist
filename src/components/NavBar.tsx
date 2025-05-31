import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="absolute bottom-4 left-[50%] -translate-x-[50%] flex px-4 py-[2px] gap-4 justify-around items-center rounded-md border-[1px] border-neutral-900 dark:border-slate-200">
      <Link
        className={clsx(
          "text-xs p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5",
          location.pathname === "/"
            ? "dark:text-white text-black font-extrabold"
            : "dark:text-white/80 text-black/80 font-bold"
        )}
        to="/"
      >
        Home
      </Link>
      <Link
        className={clsx(
          "text-xs p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5 dark:text-white",
          location.pathname === "/newtask"
            ? "dark:text-white text-black font-extrabold"
            : "dark:text-white/80 text-black/80 font-bold"
        )}
        to="/newtask"
      >
        New Task
      </Link>
    </nav>
  );
}
