import React, { forwardRef, memo } from 'react';

export function ActionsheetFlatList<T>(
  StyledActionsheetFlatList: React.ComponentType<T>
) {
  console.log('hello rerendering');
  return memo(
    forwardRef(
      (
        { ...props }: T & { children?: React.ReactNode | string },
        ref?: any
      ) => {
        return <StyledActionsheetFlatList ref={ref} {...(props as T)} />;
      }
    )
  );
}
