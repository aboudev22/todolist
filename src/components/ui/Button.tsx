import clsx from "clsx";
import type { ButtonProps } from "../../types/types";
import { buttonVariants } from "../style/button";

export default function Button({
  variant,
  text,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(className, buttonVariants({ variant }))}
    >
      {text}
    </button>
  );
}
