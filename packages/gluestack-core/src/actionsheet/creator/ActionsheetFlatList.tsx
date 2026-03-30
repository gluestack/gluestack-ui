import React, { forwardRef } from 'react';

export function ActionsheetFlatList<P>(
  StyledActionsheetFlatList: React.ComponentType<P>
) {
  return forwardRef<any, React.PropsWithoutRef<P>>(function ActionsheetFlatList(
    props,
    ref
  ) {
    return <StyledActionsheetFlatList ref={ref} {...(props as P)} />;
  });
}
