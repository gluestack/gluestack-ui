import React, { forwardRef } from 'react';

export const Alert = (StyledAlert: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledAlert ref={ref} role={props?.role || 'alert'} {...props}>
        {children}
      </StyledAlert>
    );
  });
