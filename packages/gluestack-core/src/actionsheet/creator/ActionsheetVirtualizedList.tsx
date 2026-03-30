import React, { forwardRef } from 'react';

export function ActionsheetVirtualizedList<P>(
  StyledActionsheetVirtualizedList: React.ComponentType<P>
) {
  return forwardRef<any, React.PropsWithoutRef<P>>(
    function ActionsheetVirtualizedList(props, ref) {
      return (
        <StyledActionsheetVirtualizedList ref={ref} {...(props as P)} />
      );
    }
  );
}
