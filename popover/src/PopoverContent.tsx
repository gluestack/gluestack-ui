import React, { forwardRef } from 'react';
import { useKeyboardDismissable } from '@gluestack-ui/hooks';
import { usePopover } from './PopoverContext';
import {
  Platform,
  findNodeHandle,
  AccessibilityInfo,
  Keyboard,
} from 'react-native';
import { mergeRefs } from '@gluestack-ui/utils';
import { useOverlayPosition } from '@react-native-aria/overlays';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { FocusScope as FocusScopeAria } from '@react-native-aria/focus';
import { useDialog } from '@react-native-aria/dialog';
import { PopoverContentProvider } from './PopoverContext';

const PopoverContent = (StyledPopoverContent: any, AnimatePresence?: any) =>
  forwardRef(({ children, style, ...props }: any, ref?: any) => {
    const { value } = usePopover('PopoverContext');

    const {
      targetRef,
      initialFocusRef,
      finalFocusRef,
      popoverContentId,
      headerMounted,
      bodyMounted,
      bodyId,
      headerId,
      isOpen,
      placement,
      shouldOverlapWithTrigger,
      crossOffset,
      offset,
      trapFocus,
      handleClose,
      shouldFlip,
      focusScope,
    } = value;

    const contentRef = React.useRef(null);
    React.useEffect(() => {
      if (contentRef) {
        const reactTag = findNodeHandle(contentRef.current);
        if (reactTag) {
          AccessibilityInfo.setAccessibilityFocus(reactTag);
        }
      }
    }, [isOpen, contentRef]);

    const { dialogProps } = useDialog(
      { initialFocusRef, ...props },
      contentRef
    );

    React.useEffect(() => {
      if (isOpen) {
        if (focusScope) {
          Keyboard.dismiss();
        }
        if (initialFocusRef && initialFocusRef?.current) {
          initialFocusRef?.current?.focus();
        }
      } else {
        if (finalFocusRef && finalFocusRef?.current) {
          finalFocusRef?.current?.focus();
        }
      }
    }, [initialFocusRef, finalFocusRef, isOpen, focusScope]);

    useKeyboardDismissable({
      enabled: true,
      callback: handleClose,
    });

    const accessibilityProps =
      Platform.OS === 'web'
        ? ({
            'role': 'dialog',
            'aria-labelledby': headerMounted ? headerId : undefined,
            'aria-describedby': bodyMounted ? bodyId : undefined,
          } as any)
        : {};
    const overlayRef = React.useRef(null);
    // const { x, y, reference, floating, strategy } = useFloating({
    //   placement: placement,
    //   middleware: [offset(10), flip(), shift()],
    //   ...floatingParams,
    // });
    const { overlayProps } = useOverlayPosition({
      placement: placement,
      targetRef,
      overlayRef,
      crossOffset,
      offset,
      shouldOverlapWithTrigger,
      shouldFlip,
    });

    const mergedRef = mergeRefs([ref, overlayRef, contentRef]);

    return (
      <PopoverContentProvider value={value}>
        <OverlayAnimatePresence
          visible={isOpen}
          AnimatePresence={AnimatePresence}
        >
          <StyledPopoverContent
            nativeID={popoverContentId}
            {...accessibilityProps}
            {...props}
            ref={mergedRef}
            isOpen={isOpen}
            collapsable={false}
            {...dialogProps}
            tabIndex={Platform.OS === 'web' ? -1 : undefined}
            style={{
              position: 'absolute',
              ...overlayProps?.style,
              ...style,
            }}
          >
            <FocusScopeComponent contain={trapFocus} restoreFocus autoFocus>
              {children}
            </FocusScopeComponent>
          </StyledPopoverContent>
        </OverlayAnimatePresence>
      </PopoverContentProvider>
    );
  });

const FocusScopeComponent = ({ trapFocus, focusScope, children }: any) => {
  if (focusScope)
    return (
      <FocusScopeAria contain={trapFocus} restoreFocus autoFocus>
        {children}
      </FocusScopeAria>
    );
  return children;
};

export default PopoverContent;
