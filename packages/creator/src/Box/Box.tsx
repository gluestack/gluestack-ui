import React, { forwardRef } from 'react';

export const Box = (StyledBox: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledBox ref={ref} {...props}>
        {children}
      </StyledBox>
    );
  });
