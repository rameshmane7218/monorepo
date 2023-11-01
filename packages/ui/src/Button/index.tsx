import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const Button = ({ children, ...rest }: Props) => {
  return (
    <button {...rest} style={{ background: "blue" }}>
      {children}
    </button>
  );
};
