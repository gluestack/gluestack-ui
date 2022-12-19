import React, { forwardRef } from 'react';

export const ToastTitle = (StyledToastTitle: any) =>
  forwardRef(({ children, ...props }: any) => {
    return <StyledToastTitle {...props}>{children}</StyledToastTitle>;
  });
