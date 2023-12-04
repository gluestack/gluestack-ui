import React, { forwardRef } from 'react';

export function ActionsheetItemText<T>(
  StyledActionsheetText: React.ComponentType<T>
) {
  return forwardRef(
    (
      { children, ...props }: T & { children?: React.ReactNode | string },
      ref?: any
    ) => {
      return (
        <StyledActionsheetText ref={ref} {...(props as T)}>
          {children}
        </StyledActionsheetText>
      );
    }
  );
}
