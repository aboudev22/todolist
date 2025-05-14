import clsx from "clsx";
import useTheme from "../hooks/useTheme";
import ThemeButton from "../components/ThemeButton";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const bgClass = theme === "light" ? "bg-amber-100" : "bg-neutral-800";
  return (
    <div
      className={clsx(
        bgClass,
        "relative flex w-screen h-screen justify-center items-center transition-all duration-300"
      )}
    >
      <ThemeButton
        toggleTheme={toggleTheme}
        className="absolute top-1 right-1"
      />
      <p>Bon retour chef</p>
    </div>
  );
}
