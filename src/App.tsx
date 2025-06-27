import { motion } from "framer-motion";
import { useLayoutEffect } from "react";
import useUserTheme from "./store/userThemeStore";

export default function App() {
  const { theme, toggleTheme } = useUserTheme();
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="w-screen h-screen dark:bg-neutral-900 bg-white flex flex-col justify-center items-center transition-all duration-500">
      <p className="text-black dark:text-white">App</p>
      <motion.button
        onClick={toggleTheme}
        whileTap={{ scale: 0.9 }}
        className="bg-pink-500 rounded-md text-xs p-2 cursor-pointer"
      >
        toggle theme
      </motion.button>
    </div>
  );
}
