import React, { forwardRef } from 'react';
import { BottomSheetContext } from './context';

function BottomSheetBackdrop<T>(
  StyledBottomSheetBackdrop: React.ComponentType<T>
) {
  return forwardRef(({ children, ...props }: { children?: any }, ref?: any) => {
    const { closeOnOverlayClick, handleClose, backdropVisible } =
      React.useContext(BottomSheetContext);

    if (!backdropVisible) return null;

    return (
      <StyledBottomSheetBackdrop
        ref={ref}
        onPress={() => {
          closeOnOverlayClick && handleClose();
        }}
        // ios
        accessibilityElementsHidden
        // android
        importantForAccessibility="no-hide-descendants"
        aria-hidden={true}
        {...(props as T)}
      >
        {children}
      </StyledBottomSheetBackdrop>
    );
  });
}

export default BottomSheetBackdrop;
