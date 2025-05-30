import { createContext } from "react";
import type { ThemeProps } from "../types/types";

export const ThemeContext = createContext<ThemeProps | null>(null);
