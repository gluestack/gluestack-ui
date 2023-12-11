import React, { forwardRef } from 'react';
import { AlertDialogContext } from './Context';
import {
  Platform,
  AccessibilityInfo,
  findNodeHandle,
  Keyboard,
} from 'react-native';
import { FocusScope } from '@react-native-aria/focus';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { useDialog } from '@react-native-aria/dialog';
import { mergeRefs } from '@gluestack-ui/utils';

const AlertDialogContent = (
  StyledAlertDialogContent: any,
  AnimatePresence?: any
) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { initialFocusRef, finalFocusRef, handleClose, visible } =
      React.useContext(AlertDialogContext);

    const contentRef = React.useRef(null);

    const mergedRef = mergeRefs([contentRef, ref]);

    // @ts-ignore
    const { dialogProps } = useDialog({ ...props }, mergedRef);

    React.useEffect(() => {
      if (contentRef) {
        const reactTag = findNodeHandle(contentRef.current);
        if (reactTag) {
          // Issue from react-native side
          // Hack for now, will fix this later
          AccessibilityInfo.setAccessibilityFocus(reactTag);
          AccessibilityInfo.setAccessibilityFocus(reactTag);
          AccessibilityInfo.setAccessibilityFocus(reactTag);
          AccessibilityInfo.setAccessibilityFocus(reactTag);
          AccessibilityInfo.setAccessibilityFocus(reactTag);
          AccessibilityInfo.setAccessibilityFocus(reactTag);
          AccessibilityInfo.setAccessibilityFocus(reactTag);
          AccessibilityInfo.setAccessibilityFocus(reactTag);
        }
      }
    }, [visible, contentRef]);

    React.useEffect(() => {
      if (visible) {
        Keyboard.dismiss();
        if (initialFocusRef && initialFocusRef?.current) {
          initialFocusRef?.current?.focus();
        }
      } else {
        if (finalFocusRef && finalFocusRef?.current) {
          finalFocusRef?.current?.focus();
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
          <StyledAlertDialogContent
            {...props}
            ref={mergedRef}
            onAccessibilityEscape={handleClose}
            exit={true}
            aria-modal="true"
            role={Platform.OS === 'web' ? 'alertdialog' : undefined}
            accessibilityViewIsModal
            tabIndex={Platform.OS === 'web' ? -1 : undefined}
            {...dialogProps}
          >
            {children}
          </StyledAlertDialogContent>
        </OverlayAnimatePresence>
      </FocusScope>
    );
  });

export default AlertDialogContent;
