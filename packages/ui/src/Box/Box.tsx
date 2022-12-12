import React, { forwardRef } from 'react';
import { wrapStringChild } from '../utils/wrapStringChild';
import { UIContext } from '../UIProvider';

const Box = ({ children, ...props }: any, ref: any) => {
  const { StyledBox } = React.useContext(UIContext);
  const { StyledBoxText } = React.useContext(UIContext);
  return (
    <StyledBox ref={ref} {...props}>
      {({ resolveContextChildrenStyle }: any) => {
        return wrapStringChild(
          children,
          resolveContextChildrenStyle,
          StyledBoxText
        );
      }}
    </StyledBox>
  );
};

export default forwardRef(Box);
