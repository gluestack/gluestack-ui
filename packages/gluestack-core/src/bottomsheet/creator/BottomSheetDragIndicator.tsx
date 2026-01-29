import React, { forwardRef } from 'react';

function BottomSheetDragIndicator<T>(
  StyledBottomSheetDragIndicator: React.ComponentType<T>
) {
  return forwardRef(({ children, ...props }: { children?: any }, ref?: any) => {
    return (
      <StyledBottomSheetDragIndicator
        ref={ref}
        {...(props as T)}
        focusable={false}
      >
        {children}
      </StyledBottomSheetDragIndicator>
    );
  });
}
export default BottomSheetDragIndicator;
