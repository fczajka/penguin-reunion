import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  style: string;
  callback: MouseEventHandler<HTMLButtonElement>;
}
