import { createContext } from "react";
import type { ThemeContexteType } from "../types/types";

export const ThemeContext = createContext<ThemeContexteType>({
  theme: "dark",
  toggleTheme: () => {},
});
