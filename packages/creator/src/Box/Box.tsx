import React, { forwardRef } from 'react';

const Box = (StyledBox: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledBox ref={ref} {...props}>
        {children}
      </StyledBox>
    );
  });

export default Box;
