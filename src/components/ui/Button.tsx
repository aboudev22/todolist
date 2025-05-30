import clsx from "clsx";
import type { ButtonProps } from "../../types/types";
import { buttonVariants } from "../style/button";

export default function Button({
  variant,
  text,
  onclick,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onclick}
      className={clsx(className, buttonVariants({ variant }))}
    >
      {text}
    </button>
  );
}
