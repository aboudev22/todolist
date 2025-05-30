import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "../components/style/button";
import type { ReactNode } from "react";

type ThemeType = "dark" | "light";

type ThemeProps = {
  toggleTheme: () => void;
  theme: ThemeType;
};

type ButtonProps = {
  variant: "simple" | "red" | "black";
  text?: string;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
} & VariantProps<typeof buttonVariants>;

export type { ThemeProps, ButtonProps, ThemeType };
