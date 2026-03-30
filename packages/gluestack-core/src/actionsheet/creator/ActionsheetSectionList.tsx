import React, { forwardRef } from 'react';

export function ActionsheetSectionList<P>(
  StyledActionsheetSectionList: React.ComponentType<P>
) {
  return forwardRef<any, React.PropsWithoutRef<P>>(
    function ActionsheetSectionList(props, ref) {
      return <StyledActionsheetSectionList ref={ref} {...(props as P)} />;
    }
  );
}
