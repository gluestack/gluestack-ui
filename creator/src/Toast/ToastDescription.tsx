import React, { forwardRef } from 'react';

export const ToastDescription = (StyledToastDescription: any) =>
  forwardRef(({ children, ...props }: any) => {
    return (
      <StyledToastDescription {...props}>{children}</StyledToastDescription>
    );
  });
