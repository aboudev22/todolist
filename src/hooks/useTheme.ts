import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("Erreur d'utilisation du context");
  return context;
}
