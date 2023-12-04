import React, { forwardRef } from 'react';

export function ActionsheetSectionHeaderText<T>(
  StyledActionsheetSectionHeaderText: React.ComponentType<T>
) {
  return forwardRef(
    (
      { children, ...props }: T & { children?: React.ReactNode | string },
      ref?: any
    ) => {
      return (
        <StyledActionsheetSectionHeaderText ref={ref} {...(props as T)}>
          {children}
        </StyledActionsheetSectionHeaderText>
      );
    }
  );
}
