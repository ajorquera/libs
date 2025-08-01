import { FC, PropsWithChildren } from "react";
import styles from "./Text.module.css";

interface Props extends PropsWithChildren {
  variant?: "h1" | "h2" | "h3" | "p" | "span";
}

const Text: FC<Props> = ({ children, variant = "span", ...props }) => {
  const Component = variant || "span";
  const style = styles[variant] || styles.span;

  return (
    <Component className={style} {...props}>
      {children}
    </Component>
  );
};
export default Text;
