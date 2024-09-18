import React, { forwardRef } from 'react';
import { ActionsheetContext } from './context';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { usePreventScroll } from '@react-native-aria/overlays';

function ActionsheetBackdrop<T>(
  StyledActionsheetBackdrop: React.ComponentType<T>,
  AnimatePresence?: React.ComponentType<any>
) {
  return forwardRef(
    ({ children, preventScroll = true, ...props }: T & { children?: any }, ref?: any) => {
      const { closeOnOverlayClick, handleClose, backdropVisible } =
        React.useContext(ActionsheetContext);

      usePreventScroll({ isDisabled: preventScroll });

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
