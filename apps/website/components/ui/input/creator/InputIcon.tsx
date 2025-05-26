import React, { forwardRef } from 'react';

export const InputIcon = (StyledInputIcon: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledInputIcon ref={ref} {...props}>
        {children}
      </StyledInputIcon>
    );
  });
