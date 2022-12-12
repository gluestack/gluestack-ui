import React, { createContext } from "react";
import type { IStackProps } from "./types";
import { UIContext } from "../UIProvider";
export const StackContext = createContext<any>({});

export function Stack({
  children,
  resolveContextChildrenStyle,
  reversed,
  space,
  direction,
  divider,
  ...props
}: IStackProps) {
  const { Stack: StyledStack } = React.useContext(UIContext);

  return <StyledStack {...props}></StyledStack>;
}
