import clsx from "clsx";
import useTheme from "../hooks/useTheme";
import ThemeButton from "../components/ThemeButton";
import InputField from "../components/InputField";
import type { User } from "../types/types";
import { useReducer, useState } from "react";
import reducer from "../utils/userReducer";
import { useNavigate } from "react-router-dom";
import handleSubmit from "../utils/HandleSubmitForm";

const initialUserState: User = { name: "", email: "", password: "" };

export default function Signup() {
  const [state, dispatch] = useReducer(reducer, initialUserState);
  const [toggleViewPassword, setToggleViewPassword] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const bgClass = theme === "light" ? "bg-amber-100" : "bg-neutral-800";
  const colorText = theme === "light" ? "text-neutral-900" : "text-amber-50";
  return (
    <div
      className={clsx(
        bgClass,
        "absolute w-screen h-screen flex justify-center items-center transition-all duration-300"
      )}
    >
      <ThemeButton
        toggleTheme={toggleTheme}
        className="absolute top-1 right-2"
      />
      <form
        className={clsx(
          "p-5 flex flex-col justify-center items-center rounded-2xl backdrop-blur-sm ",
          theme === "dark" ? "bg-white/20" : "bg-blue-500/20"
        )}
        action=""
      >
        <h1
          className={clsx(
            colorText,
            "text-2xl md:text-5xl mb-8 font-bold lg:font-extrabold"
          )}
        >
          Signup
        </h1>
        <InputField
          onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
          value={state.name}
          type="text"
          name="name"
          placeholder="Your name"
        />
        <InputField
          onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
          value={state.email}
          type="email"
          name="email"
          placeholder="Your email"
        />
        <InputField
          onChange={(e) =>
            dispatch({ type: "password", payload: e.target.value })
          }
          value={state.password}
          type={toggleViewPassword ? "text" : "password"}
          name="password"
          placeholder="password"
        />
        <button
          type="button"
          onClick={() =>
            toggleViewPassword
              ? setToggleViewPassword(false)
              : setToggleViewPassword(true)
          }
          className="text-blue-600 underline font-bold text-xs self-end cursor-pointer p-1 rounded-full mt-1"
        >
          {toggleViewPassword ? "hide" : "show"} passeword
        </button>
        <button
          type="button"
          onClick={() => {
            handleSubmit(state);
            dispatch({ type: "reset" });
          }}
          className={clsx(
            "p-2 w-full cursor-pointer my-4 rounded-full font-bold text-white",
            theme === "dark" ? "bg-neutral-900" : "bg-blue-400"
          )}
        >
          Sign in
        </button>
        <p>
          already have an account?{" "}
          <span
            onClick={() => navigate("/Login")}
            className={clsx(
              "text-xs mt-3 underline cursor-pointer font-bold",
              theme === "dark" ? "text-blue-400 " : "text-blue-600"
            )}
          >
            Sign in
          </span>
        </p>
      </form>
    </div>
  );
}
