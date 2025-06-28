import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import useUserTheme from "../store/userThemeStore";

export default function ThemeButton() {
  const { theme, toggleTheme } = useUserTheme();
  const [isHover, setIsHover] = useState(false);

  const variants = {
    initial: {
      y: 20,
      opacity: 0,
      rotate: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        delay: 0.2,
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      rotate: [0, 20, 10],
      opacity: [1, 1, 0],
      y: [0, 0, 20],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        times: [0, 0.6, 1],
      },
    },
  };

  return (
    <motion.div className="absolute z-10 flex top-0 right-0 gap-2 overflow-hidden m-2">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: isHover ? 1 : 0 }}
        className="text-xs h-fit p-1 rounded-md dark:bg-red-500 text-white bg-black"
      >
        change theme
      </motion.p>

      <AnimatePresence mode="wait">
        {theme === "light" ? (
          <motion.div
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            whileHover="hover"
            onClick={toggleTheme}
            key="sun"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="cursor-pointer"
          >
            <Sun size={30} color="oklch(90.5% 0.182 98.111)" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            onClick={toggleTheme}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="cursor-pointer"
          >
            <Moon size={30} color="oklch(62.3% 0.214 259.815)" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
