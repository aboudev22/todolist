import { createContext } from "react";
import type { ThemeType } from "../types/types";

export const ThemeContext = createContext<ThemeType | null>(null);
