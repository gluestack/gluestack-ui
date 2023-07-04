import React, { forwardRef } from 'react';
import { useKeyboardDismissable } from '@gluestack-ui/hooks';
import { usePopover } from './PopoverContext';
import { Platform, findNodeHandle, AccessibilityInfo } from 'react-native';
// import { usePopperContext } from '../../popper/src/PopperContext';
import { mergeRefs } from '@gluestack-ui/utils';
import { useOverlayPosition } from '@react-native-aria/overlays';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { FocusScope } from '@react-native-aria/focus';
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
      const finalFocusRefCurrentVal = finalFocusRef?.current;
      if (initialFocusRef && initialFocusRef.current) {
        initialFocusRef.current.focus();
      }

      return () => {
        if (finalFocusRefCurrentVal) {
          finalFocusRefCurrentVal.focus();
        }
      };
    }, [finalFocusRef, initialFocusRef]);

    useKeyboardDismissable({
      enabled: true,
      callback: handleClose,
    });

    const accessibilityProps =
      Platform.OS === 'web'
        ? ({
            'accessibilityRole': 'dialog',
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
      <FocusScope contain={trapFocus} restoreFocus autoFocus>
        <OverlayAnimatePresence
          visible={isOpen}
          AnimatePresence={AnimatePresence}
        >
          <PopoverContentProvider value={value}>
            <StyledPopoverContent
              nativeID={popoverContentId}
              {...accessibilityProps}
              {...props}
              ref={mergedRef}
              isOpen={isOpen}
              collapsable={false}
              {...dialogProps}
              focusable={Platform.OS === 'web' ? false : undefined}
              style={{
                position: 'absolute',
                ...overlayProps?.style,
                ...style,
              }}
            >
              {children}
            </StyledPopoverContent>
          </PopoverContentProvider>
        </OverlayAnimatePresence>
      </FocusScope>
    );
  });

export default PopoverContent;
