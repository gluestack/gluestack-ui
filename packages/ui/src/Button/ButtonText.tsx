import React, { useContext } from "react";
import { ButtonContext } from "./Button";
import { UIContext } from "../UIProvider";

export function ButtonText({ children, ...props }: any) {
  const { resolveContextChildrenStyle } = useContext(ButtonContext);
  const { StyledButtonText } = React.useContext(UIContext);

  let { ancestorStyle } = StyledButtonText.config;
  let styledObject = {};

  ancestorStyle?.forEach((consumer: any) => {
    if (resolveContextChildrenStyle[consumer]) {
      styledObject = [styledObject, resolveContextChildrenStyle[consumer]];
    }
  });

  return (
    <StyledButtonText {...props} ancestorStyle={styledObject}>
      {children}
    </StyledButtonText>
  );
}
