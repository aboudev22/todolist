import clsx from "clsx";
import useTheme from "../hooks/useTheme";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navigation() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav
      className={clsx(
        "absolute bottom-10 text-base font-bold left-[50%] -translate-x-[50%] flex p-2 px-4 gap-4 rounded-md shadow-md/40",
        theme === "dark"
          ? "bg-white shadow-amber-100 text-black"
          : "bg-black shadow-neutral-900 text-white"
      )}
    >
      <p
        onClick={() => navigate("/")}
        className={clsx(
          "cursor-pointer hover:text-blue-500",
          currentPath === "/" ? "font-extrabold" : ""
        )}
      >
        Home
      </p>
      <p
        onClick={() => navigate("/AllTask")}
        className={clsx(
          "cursor-pointer  hover:text-blue-500",
          currentPath === "/AllTask" ? "font-extrabold" : ""
        )}
      >
        All tasks
      </p>
      <p
        onClick={() => navigate("/AddTask")}
        className={clsx(
          "cursor-pointer  hover:text-blue-500",
          currentPath === "/AddTask" ? "font-extrabold" : ""
        )}
      >
        New task
      </p>
    </nav>
  );
}
