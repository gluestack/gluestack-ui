import React from "react";
import { UIContext } from "../UIProvider";

export function Text({ children, ...props }: any) {
  const { StyledText } = React.useContext(UIContext);
  return <StyledText {...props}>{children}</StyledText>;
}
