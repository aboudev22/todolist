import NavBar from "./components/NavBar";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { theme } = useTheme();
  return (
    <div
      className={`w-screen h-screen flex flex-col items-center pt-4 transition-all duration-300 ${
        theme === "light" ? "bg-amber-100" : "bg-neutral-800"
      }`}
    >
      <NavBar />
      <h1
        className={`font-bold text-center text-4xl md:text-7xl ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        Up your productivity like never befor.
      </h1>
      <button
        className={`p-2 rounded-full font-bold ${
          theme === "light"
            ? "bg-black text-white"
            : "bg-white text-black cursor-pointer"
        }`}
      >
        Get started
      </button>
    </div>
  );
}
