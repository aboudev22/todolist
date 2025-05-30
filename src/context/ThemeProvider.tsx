import { useEffect, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const isDarkPreferred = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (isDarkPreferred) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
