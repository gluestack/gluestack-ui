import React, { forwardRef } from 'react';
import { useKeyboardDismissable } from '@gluestack-ui/hooks';
import { usePopover } from './PopoverContext';
import { Platform, findNodeHandle, AccessibilityInfo } from 'react-native';
// import { usePopperContext } from '../../popper/src/PopperContext';
import { mergeRefs } from '@gluestack-ui/utils';
import { useOverlayPosition } from '@react-native-aria/overlays';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { FocusScope } from '@react-native-aria/focus';

const PopoverContent = (StyledPopoverContent: any, AnimatePresence: any) =>
  forwardRef(({ children, style, ...props }: any, ref: any) => {
    const { value } = usePopover('PopoverContext');
    const {
      targetRef,
      onClose,
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
      callback: onClose,
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
    });

    const mergedRef = mergeRefs([ref, overlayRef, contentRef]);

    return (
      <OverlayAnimatePresence
        visible={value?.isOpen}
        AnimatePresence={AnimatePresence}
      >
        <FocusScope contain={trapFocus} restoreFocus autoFocus>
          <StyledPopoverContent
            nativeID={popoverContentId}
            {...accessibilityProps}
            {...props}
            ref={mergedRef}
            isOpen={isOpen}
            collapsable={false}
            style={{
              position: 'absolute',
              ...overlayProps?.style,
              ...style,
            }}
          >
            {children}
          </StyledPopoverContent>
        </FocusScope>
      </OverlayAnimatePresence>
    );
  });

export default PopoverContent;
