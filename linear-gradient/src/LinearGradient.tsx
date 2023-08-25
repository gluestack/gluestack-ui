import React, { forwardRef } from 'react';

export const LinearGradient = (StyledLinearGradient: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    // console.log(props);
    return (
      <StyledLinearGradient ref={ref} {...props}>
        {children}
      </StyledLinearGradient>
    );
  });
