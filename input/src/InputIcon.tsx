import React, { forwardRef } from 'react';

export const InputIcon = (StyledInputIcon: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledInputIcon focusable={false} ref={ref} {...props}>
        {children}
      </StyledInputIcon>
    );
  });
