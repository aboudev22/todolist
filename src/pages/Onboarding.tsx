import clsx from "clsx";
import NavBar from "../components/NavBar";
import useTheme from "../hooks/useTheme";
import FeaturesBtn from "../components/FeaturesBtn";
import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const bgClass = theme === "light" ? "bg-amber-100" : "bg-neutral-800";
  const colorText = theme === "light" ? "text-neutral-900" : "text-amber-50";
  return (
    <div
      className={clsx(
        bgClass,
        "w-screen h-screen flex flex-col items-center pt-4 transition-all duration-300"
      )}
    >
      <NavBar />
      <div className="w-full mt-28 flex flex-col justify-center items-center gap-10">
        <h1
          className={clsx(
            colorText,
            "font-bold text-center text-4xl md:text-7xl w-full md:w-2/3"
          )}
        >
          Up your productivity like never befor.
        </h1>
        <button
          onClick={() => navigate("/Signup")}
          className={clsx(
            "p-1 px-2 rounded-md cursor-pointer hover:-translate-y-0.5 hover:shadow-2xl shadow-neutral-950/80 transition-all duration-150 font-bold",
            theme === "light"
              ? "bg-black text-white"
              : "bg-white text-black cursor-pointer"
          )}
        >
          Get started
        </button>
        <div className="flex gap-2 pt-4">
          <FeaturesBtn name="free signup" />
          <FeaturesBtn name="take notes" />
          <FeaturesBtn name="to-do list" />
        </div>
      </div>
    </div>
  );
}
