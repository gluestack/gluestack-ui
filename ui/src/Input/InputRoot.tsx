import React from "react";
import { UIContext } from "../UIProvider";
import type { ViewProps } from "react-native";

export function InputRoot({ children, ...props }: ViewProps) {
  const { StyledInputRoot } = React.useContext(UIContext);

  return <StyledInputRoot {...props}>{children}</StyledInputRoot>;
}
