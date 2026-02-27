import { ButtonHTMLAttributes } from "react";

 export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  title: string | undefined,
  type?: "submit" | "reset" | "button"
}
