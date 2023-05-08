/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import { ModalContext } from './Context';
import { Platform, findNodeHandle, AccessibilityInfo } from 'react-native';
import { FocusScope } from '@react-native-aria/focus';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { useDialog } from '@react-native-aria/dialog';
import { mergeRefs } from '@gluestack-ui/utils';

const ModalContent = (StyledModalContent: any, AnimatePresence?: any) =>
  forwardRef(({ children, focusable = false, ...props }: any, ref?: any) => {
    const { initialFocusRef, finalFocusRef, handleClose, visible } =
      React.useContext(ModalContext);

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
          <StyledModalContent
            {...props}
            ref={mergedRef}
            onAccessibilityEscape={handleClose}
            aria-modal="true"
            accessibilityRole={Platform.OS === 'web' ? 'dialog' : undefined}
            accessibilityViewIsModal
            focusable={Platform.OS === 'web' ? focusable : undefined}
            {...dialogProps}
          >
            {children}
          </StyledModalContent>
        </OverlayAnimatePresence>
      </FocusScope>
    );
  });

export default ModalContent;
