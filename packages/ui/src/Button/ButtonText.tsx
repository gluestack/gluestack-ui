import React, { useContext } from "react";
import StyledButtonText from "./styled/ButtonText";
import { ButtonContext } from "./Button";

export function ButtonText({ children, ...props }: any) {
  const { resolveContextChildrenStyle } = useContext(ButtonContext);
  // @ts-ignore
  let { ancestorStyle } = StyledButtonText.config;
  let styledObject = {};
  // console.log(resolveContextChildrenStyle, "resolveContextChildrenStyle");

  ancestorStyle?.forEach((consumer: any) => {
    if (resolveContextChildrenStyle[consumer]) {
      styledObject = [styledObject, resolveContextChildrenStyle[consumer]];
    }
  });
  // console.log(styledObject);

  return (
    <StyledButtonText {...props} style={styledObject}>
      {children}
    </StyledButtonText>
  );
}
