import React, { forwardRef } from 'react';

export function ToastComponent<StyledToastProps>(
  StyledToast: React.ComponentType<StyledToastProps>
) {
  return forwardRef(
    (
      { children, ...props }: StyledToastProps & { children?: any },
      ref?: any
    ) => {
      return (
        <StyledToast {...(props as StyledToastProps)} ref={ref}>
          {children}
        </StyledToast>
      );
    }
  );
}
