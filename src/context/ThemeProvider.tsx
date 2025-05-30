import { type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const toggleTheme = () => {
    if (window.matchMedia("(perfers-color-scheme : dark)").matches) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
