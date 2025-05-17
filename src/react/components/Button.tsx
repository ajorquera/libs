import { ButtonHTMLAttributes, FC } from "react";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <button {...props}>
      {children}
    </button>
  );
}
export default Button;