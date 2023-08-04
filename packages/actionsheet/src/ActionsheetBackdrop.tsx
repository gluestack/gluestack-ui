import React, { forwardRef } from 'react';
import { ActionsheetContext } from './context';
function ActionsheetBackdrop<T>(
  StyledActionsheetBackdrop: React.ComponentType<T>
) {
  return forwardRef(
    ({ children, ...props }: T & { children?: any }, ref?: any) => {
      const { closeOnOverlayClick, handleClose, backdropVisible } =
        React.useContext(ActionsheetContext);
      return (
        <StyledActionsheetBackdrop
          ref={ref}
          onPress={() => {
            closeOnOverlayClick && handleClose();
          }}
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
          aria-hidden={true}
          // style={{ display: backdropVisible ? 'flex' : 'none' }}
          {...(props as T)}
        >
          {children}
        </StyledActionsheetBackdrop>
      );
    }
  );
}

export default ActionsheetBackdrop;
