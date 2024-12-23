import React, { forwardRef } from 'react';

function ActionsheetDragIndicator<T>(
  StyledActionsheetDragIndicator: React.ComponentType<T>
) {
  return forwardRef(({ children, ...props }: { children?: any }, ref?: any) => {
    return (
      <StyledActionsheetDragIndicator
        ref={ref}
        {...(props as T)}
        focusable={false}
      >
        {children}
      </StyledActionsheetDragIndicator>
    );
  });
}
export default ActionsheetDragIndicator;
