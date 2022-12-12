import React, { forwardRef } from "react";
import { UIContext } from "../UIProvider";

const Text = ({ children, ...props }: any, ref: any) => {
  const { StyledText } = React.useContext(UIContext);
  return <StyledText {...props}>{children}</StyledText>;
};

export default forwardRef(Text);
