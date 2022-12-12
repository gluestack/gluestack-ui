import React from "react";
import { UIContext } from "../UIProvider";

export function Center({ children, ...props }: any) {
  const { StyledCenter } = React.useContext(UIContext);
  return <StyledCenter {...props}>{children}</StyledCenter>;
}
