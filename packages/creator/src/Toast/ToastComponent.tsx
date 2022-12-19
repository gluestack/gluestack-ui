import React, { forwardRef } from 'react';

export const ToastComponent = (StyledToast: any) =>
  forwardRef(({ children, ...props }: any) => {
    return <StyledToast {...props}>{children}</StyledToast>;
  });
