import React, { forwardRef } from 'react';

export function ActionsheetSectionList<T>(
  StyledActionsheetSectionList: React.ComponentType<T>
) {
  return forwardRef(
    ({ ...props }: T & { children?: React.ReactNode | string }, ref?: any) => {
      return <StyledActionsheetSectionList ref={ref} {...(props as T)} />;
    }
  );
}
