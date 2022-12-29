import React, { forwardRef } from 'react';

function ActionsheetDragIndicator<T>(
  StyledActionsheetDragIndicator: React.ComponentType<T>
) {
  return forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledActionsheetDragIndicator ref={ref} {...(props as T)}>
        {children}
      </StyledActionsheetDragIndicator>
    );
  });
}
export default ActionsheetDragIndicator;
