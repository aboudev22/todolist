import clsx from "clsx";
import Button from "../components/ui/Button";
import useTheme from "../hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export default function Home() {
  const { toggleTheme, theme } = useTheme();
  return (
    <div
      className={clsx(
        "w-screen h-screen flex flex-col items-center dark:bg-neutral-900 bg-amber-50 p-4 transition-all duration-300"
      )}
    >
      <Button
        text="switch theme"
        variant="red"
        onClick={() => {
          console.log("clique");
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
      <h1 className="dark:text-white text-black text-center mt-8 text-6xl font-bold">
        Up your productivity like never before
      </h1>
    </div>
  );
}
