import useTheme from "../hooks/useTheme";
import clsx from "clsx";

type InputType = {
  name: string;
  placeholder: string;
  type: "text" | "password" | "email";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputField({
  name,
  placeholder,
  type,
  value,
  onChange,
}: InputType) {
  const { theme } = useTheme();
  const bgClass = theme === "dark" ? "" : "";
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={clsx(
        bgClass,
        "w-sm p-2 mt-1 focus:outline-none rounded-md",
        theme === "dark" ? "bg-white/10" : "bg-blue-500/20"
      )}
    />
  );
}
