import React, { forwardRef } from 'react';

export function ActionsheetVirtualizedList<T>(
  StyledActionsheetVirtualizedList: React.ComponentType<T>
) {
  return forwardRef(
    ({ ...props }: { children?: React.ReactNode | string }, ref?: any) => {
      return <StyledActionsheetVirtualizedList ref={ref} {...(props as T)} />;
    }
  );
}
