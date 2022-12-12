import React from "react";
import { wrapStringChild } from "../utils/wrapStringChild";
import { UIContext } from "../UIProvider";

export function Box({ children, ...props }: any) {
  const { StyledBox } = React.useContext(UIContext);
  return (
    <StyledBox {...props}>
      {({ resolveContextChildrenStyle }: any) => {
        return wrapStringChild(children, resolveContextChildrenStyle);
      }}
    </StyledBox>
  );
}
