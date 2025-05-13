import { createContext } from "react";
import type { authContextType } from "../types/types";

export const AuthContext = createContext<authContextType>({
  isConnected: false,
  toggleConnected: () => {},
});
