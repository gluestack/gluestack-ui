import React, { forwardRef } from 'react';

export function ActionsheetVirtualizedList<T>(
  StyledActionsheetVirtualizedList: React.ComponentType<T>
) {
  return forwardRef(
    ({ ...props }: T & { children?: React.ReactNode | string }, ref?: any) => {
      return <StyledActionsheetVirtualizedList ref={ref} {...(props as T)} />;
    }
  );
}
