import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const useUserTheme = create(
  persist<ThemeProps>(
    (set) => ({
      theme: "light",
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
    }),
    {
      name: "user-theme",
    }
  )
);

export default useUserTheme;
