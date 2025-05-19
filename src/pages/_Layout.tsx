import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import clsx from "clsx";
import useTheme from "../hooks/useTheme";
import ThemeButton from "../components/ThemeButton";

const Layout = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={clsx(
        "w-screen h-screen transition-all duration-300",
        theme === "dark" ? "bg-neutral-900" : "bg-amber-50"
      )}
    >
      <ThemeButton
        className="absolute right-2 top-2"
        toggleTheme={toggleTheme}
      />
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
