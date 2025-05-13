import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
import type { ThemeType } from "../types/types";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const userTheme = localStorage.getItem("theme");
    return userTheme === "light" || userTheme === "dark" ? userTheme : "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
