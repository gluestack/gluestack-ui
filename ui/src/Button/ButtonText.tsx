import React, { useContext, forwardRef } from "react";
import { ButtonContext } from "./Button";
import { UIContext } from "../UIProvider";

const ButtonText = ({ children, ...props }: any, ref: any) => {
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
    <StyledButtonText ref={ref} {...props} ancestorStyle={styledObject}>
      {children}
    </StyledButtonText>
  );
};

export default forwardRef(ButtonText);
