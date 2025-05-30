import { useLayoutEffect, useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { getlocalItem } from "../utils/getLocalItem";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsconnected] = useState(true);
  const toggleConnected = () => {
    setIsconnected(!isConnected);
    console.log("connecter");
  };

  useLayoutEffect(() => {
    const token = getlocalItem("token");
    if (!token.trim()) {
      console.log("Token indisponible vous n'etes pas connecter");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isConnected, toggleConnected }}>
      {children}
    </AuthContext.Provider>
  );
}
