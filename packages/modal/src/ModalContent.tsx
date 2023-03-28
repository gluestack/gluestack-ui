import React, { forwardRef } from 'react';
import { ModalContext } from './Context';
import { Platform } from 'react-native';
import { FocusScope } from '@react-native-aria/focus';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { useDialog } from './useDialogNative';
import { mergeRefs } from '@gluestack-ui/utils';

const ModalContent = (StyledModalContent: any, AnimatePresence: any) =>
  forwardRef(({ children, focusable = true, ...props }: any, ref?: any) => {
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

    const myref = React.useRef(null);
    const mergedRef = mergeRefs([myref, ref]);
    const { dialogProps } = useDialog({ ...props }, mergedRef);

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
            ref={mergedRef}
            onAccessibilityEscape={handleClose}
            aria-modal="true"
            accessibilityRole={Platform.OS === 'web' ? 'dialog' : undefined}
            accessibilityViewIsModal
            focusable={focusable}
            {...dialogProps}
          >
            {children}
          </StyledModalContent>
        </OverlayAnimatePresence>
      </FocusScope>
    );
  });

export default ModalContent;
