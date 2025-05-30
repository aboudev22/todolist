import { useEffect, useLayoutEffect, useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
import type { ThemeType } from "../types/types";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(() => {
    const userTheme = localStorage.getItem("theme");
    return userTheme ? (userTheme as ThemeType) : "light";
  });
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useLayoutEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  });

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
