import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="absolute bottom-4 left-[50%] -translate-x-[50%] flex px-4 py-[2px] gap-4 justify-around items-center rounded-md outline-[2px] bg-black dark:bg-red-500">
      <Link
        className={clsx(
          "text-xs p-2 text-white rounded-md hover:bg-black/5 dark:hover:bg-white/5",
          location.pathname === "/" ? "font-extrabold" : "font-bold"
        )}
        to="/"
      >
        Home
      </Link>
      <Link
        className={clsx(
          "text-xs p-2 text-white rounded-md hover:bg-black/5 dark:hover:bg-white/5",
          location.pathname === "/newtask" ? "font-extrabold" : "font-bold"
        )}
        to="/newtask"
      >
        New Task
      </Link>
    </nav>
  );
}
