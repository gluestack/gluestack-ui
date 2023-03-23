/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import { ModalContext } from './Context';
import { Platform } from 'react-native';
import { FocusScope } from '@react-native-aria/focus';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';

const ModalContent = (StyledModalContent: any, AnimatePresence: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { initialFocusRef, finalFocusRef, handleClose, visible } =
      React.useContext(ModalContext);

    React.useEffect(() => {
      const finalRefVal = finalFocusRef ? finalFocusRef.current : null;
      if (visible) {
        if (initialFocusRef && initialFocusRef.current) {
          //@ts-ignore
          initialFocusRef.current.focus();
        }
      } else {
        if (finalRefVal) {
          //@ts-ignore
          finalRefVal.focus();
        }
      }
    }, [initialFocusRef, finalFocusRef, visible]);

    return (
      <FocusScope
        contain={visible}
        autoFocus={visible && !initialFocusRef}
        restoreFocus={visible && !finalFocusRef}
      >
        <OverlayAnimatePresence
          visible={visible}
          AnimatePresence={AnimatePresence}
        >
          <StyledModalContent
            {...props}
            ref={ref}
            onAccessibilityEscape={handleClose}
            //@ts-ignore - web only
            aria-modal="true"
            //@ts-ignore - web only
            accessibilityRole={Platform.OS === 'web' ? 'dialog' : undefined}
            accessibilityViewIsModal
          >
            {children}
          </StyledModalContent>
        </OverlayAnimatePresence>
      </FocusScope>
    );
  });

export default ModalContent;
