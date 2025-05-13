import { useState } from "react";

type ButtonTheme = {
  toggleTheme: () => void;
};

export default function ThemeButton({ toggleTheme }: ButtonTheme) {
  const [isDark, setIsDark] = useState(false);
  const handleClick = () => {
    if (isDark) {
      setIsDark(false);
    } else setIsDark(true);
  };

  return (
    <button
      onClick={() => {
        toggleTheme();
        handleClick();
      }}
      className={`${
        isDark
          ? "bg-neutral-300 active:bg-neutral-400"
          : "bg-blue-950 active:bg-blue-900"
      } cursor-pointer font-bold text-white w-12 h-8 px-2 rounded-full shadow-lg`}
    >
      <div
        className={`${
          isDark ? "translate-x-0 bg-blue-900" : "translate-x-full bg-white"
        } w-4 h-4 rounded-full transition-all duration-300`}
      ></div>
    </button>
  );
}
