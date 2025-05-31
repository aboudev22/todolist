import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Button from "../components/ui/Button";
import useTheme from "../hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export default function MainLayout() {
  const { toggleTheme, theme } = useTheme();
  return (
    <div>
      <Button
        text="switch theme"
        variant="red"
        onClick={() => {
          toggleTheme();
        }}
        className="absolute right-2 top-2 shadow-md/45 dark:shadow-red-500"
      >
        {theme === "dark" ? (
          <Sun
            className="text-white transition-all duration-400 ease-out"
            size={16}
          />
        ) : (
          <Moon
            size={16}
            className="text-white transition-all duration-400 ease-out"
          />
        )}
      </Button>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
