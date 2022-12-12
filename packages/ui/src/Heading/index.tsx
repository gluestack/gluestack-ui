import React from "react";
import { UIContext } from "../UIProvider";

export function Heading({ children, ...props }: any) {
  const { StyledHeading } = React.useContext(UIContext);
  return <StyledHeading {...props}>{children}</StyledHeading>;
}
