import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "text-xs font-bold p-2 rounded-md cursor-pointer active:brightness-95 transition",
  {
    variants: {
      variant: {
        red: "bg-red-500 text-white",
        black: "bg-black text-white",
        simple: "bg-transparent text-black",
      },
    },
    defaultVariants: {
      variant: "simple",
    },
  }
);
