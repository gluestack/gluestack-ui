import StyledHeading from "./styled/StyledHeading";
import React from "react";

export function Heading({ children, ...props }: any) {
  return <StyledHeading {...props}>{children}</StyledHeading>;
}
