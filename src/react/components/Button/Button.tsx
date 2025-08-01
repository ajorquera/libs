import { FC, HTMLAttributes } from "react";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: FC<Props> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
