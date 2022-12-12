import React, { forwardRef } from "react";
import { UIContext } from "../UIProvider";

const Heading = ({ children, ...props }: any, ref: any) => {
  const { StyledHeading } = React.useContext(UIContext);
  return (
    <StyledHeading ref={ref} {...props}>
      {children}
    </StyledHeading>
  );
};

export default forwardRef(Heading);
