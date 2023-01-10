import React, { forwardRef } from 'react';

export function ToastDescription<StyledToastDescriptionProps>(
  StyledToastDescription: React.ComponentType<StyledToastDescriptionProps>
) {
  return forwardRef(
    ({
      children,
      ...props
    }: StyledToastDescriptionProps & { children?: any }) => {
      return (
        <StyledToastDescription {...(props as StyledToastDescriptionProps)}>
          {children}
        </StyledToastDescription>
      );
    }
  );
}
