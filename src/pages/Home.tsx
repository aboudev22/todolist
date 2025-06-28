import { motion } from "framer-motion";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import useUserTheme from "../store/userThemeStore";

export default function Home() {
  const { theme } = useUserTheme();
  const location = useLocation();
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);
  return (
    <motion.div
      key={location.pathname}
      className="w-full h-full dark:bg-neutral-800 bg-green-100 flex justify-center items-center transition-all duration-500"
    >
      <h1 className="text-7xl text-center font-bold text-black dark:text-neutral-200">
        UP YOUR PRODUCTIVITY LIKE NEVER BEFORE
      </h1>
    </motion.div>
  );
}
