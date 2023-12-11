import React, { forwardRef } from 'react';

export function ActionsheetScrollView<T>(
  StyledActionsheetScrollView: React.ComponentType<T>
) {
  return forwardRef(
    (
      { children, ...props }: T & { children?: React.ReactNode | string },
      ref?: any
    ) => {
      return (
        <StyledActionsheetScrollView ref={ref} {...(props as T)}>
          {children}
        </StyledActionsheetScrollView>
      );
    }
  );
}
