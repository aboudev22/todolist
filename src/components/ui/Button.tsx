import clsx from "clsx";
import type { ButtonProps } from "../../types/types";
import { buttonVariants } from "../style/button";

export default function Button({
  variant,
  onClick,
  className,
  children,
  text,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={clsx(className, buttonVariants({ variant }))}
    >
      {children} {text}
    </button>
  );
}
