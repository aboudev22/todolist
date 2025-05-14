import { useNavigate } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import ThemeButton from "./ThemeButton";

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  return (
    <nav className="flex w-full justify-between px-5 ">
      <p
        className={`text-2xl font-black transition-all duration-300  ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        pro.
      </p>
      <div className="flex gap-5">
        <ThemeButton toggleTheme={toggleTheme} />
        <button
          onClick={() => navigate("/Login")}
          className={` font-bold transition-all duration-300 cursor-pointer ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => navigate("/Signup")}
          className={`p-2 font-bold rounded-full cursor-pointer transition-all duration-300  ${
            theme === "light" ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          Sign up
        </button>
      </div>
    </nav>
  );
}
