import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "../components/style/button";

type ThemeType = {
  toggleTheme: () => void;
};

type ButtonProps = {
  variant: "simple" | "red" | "black";
  text: string;
  onClick?: () => void;
  className?: string;
} & VariantProps<typeof buttonVariants>;

export type { ThemeType, ButtonProps };
