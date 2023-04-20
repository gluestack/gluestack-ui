import React, { forwardRef } from 'react';
import { ActionsheetContext } from './context';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';

function ActionsheetBackdrop<T>(
  StyledActionsheetBackdrop: React.ComponentType<T>,
  AnimatePresence?: React.ComponentType<any>
) {
  return forwardRef(
    ({ children, ...props }: T & { children?: any }, ref?: any) => {
      const { visible, closeOnOverlayClick, handleClose } =
        React.useContext(ActionsheetContext);

      return (
        <OverlayAnimatePresence
          visible={visible}
          AnimatePresence={AnimatePresence}
        >
          <StyledActionsheetBackdrop
            ref={ref}
            onPress={() => {
              closeOnOverlayClick && handleClose();
            }}
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            aria-hidden={true}
            {...(props as T)}
          >
            {children}
          </StyledActionsheetBackdrop>
        </OverlayAnimatePresence>
      );
    }
  );
}

export default ActionsheetBackdrop;
