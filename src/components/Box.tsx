import { FC, PropsWithChildren } from "react";

export interface Props extends PropsWithChildren {
  mt: number;
  mb: number;
}

const Box: FC<Props> = ({ children, ...props }) => {
  return (
    <div
      {...props}
    >
      {children}
    </div>
  );
}

export default Box;