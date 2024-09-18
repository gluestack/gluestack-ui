import React, { forwardRef } from 'react';
import { ActionsheetContext } from './context';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';

function ActionsheetBackdrop<T>(
  StyledActionsheetBackdrop: React.ComponentType<T>,
  AnimatePresence?: React.ComponentType<any>
) {
  return forwardRef(
    ({ children, ...props }: T & { children?: any }, ref?: any) => {
      const { closeOnOverlayClick, handleClose, backdropVisible } =
        React.useContext(ActionsheetContext);

      return (
        <OverlayAnimatePresence
          visible={backdropVisible}
          AnimatePresence={AnimatePresence}
        >
          <StyledActionsheetBackdrop
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
          </StyledActionsheetBackdrop>
        </OverlayAnimatePresence>
      );
    }
  );
}

export default ActionsheetBackdrop;
