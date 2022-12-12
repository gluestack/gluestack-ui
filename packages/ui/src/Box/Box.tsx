import React from "react";
import { UIContext } from "../UIProvider";

export function Box({ children, ...props }: any) {
  const { StyledBox } = React.useContext(UIContext);
  return <StyledBox {...props}>{children}</StyledBox>;
}
