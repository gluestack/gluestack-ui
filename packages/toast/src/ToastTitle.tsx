import React, { forwardRef } from 'react';

export function ToastTitle<StyledToastTitleProps>(
  StyledToastTitle: React.ComponentType<StyledToastTitleProps>
) {
  return forwardRef(
    (
      { children, ...props }: StyledToastTitleProps & { children?: any },
      ref?: any
    ) => {
      return (
        <StyledToastTitle {...(props as StyledToastTitleProps)} ref={ref}>
          {children}
        </StyledToastTitle>
      );
    }
  );
}
