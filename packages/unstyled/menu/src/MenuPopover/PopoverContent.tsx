import React, { forwardRef } from 'react';
import { useKeyboardDismissable } from '@gluestack-ui/hooks';
import { usePopover } from './PopoverContext';
import { AccessibilityInfo, View, findNodeHandle } from 'react-native';
import { mergeRefs } from '@gluestack-ui/utils';
import { useOverlayPosition } from '@react-native-aria/overlays';

const PopoverContent = forwardRef(
  ({ children, style, ...props }: any, ref: any) => {
    const { value } = usePopover('PopoverContext');
    const {
      targetRef,
      onClose,
      initialFocusRef,
      finalFocusRef,
      popoverContentId,
      placement,
      shouldOverlapWithTrigger,
      crossOffset,
      offset,
      shouldFlip,
      isOpen,
    } = value;

    const contentRef = React.useRef(null);
    React.useEffect(() => {
      if (contentRef) {
        const reactTag = findNodeHandle(contentRef.current);
        if (reactTag) {
          AccessibilityInfo.isScreenReaderEnabled().then((enabled) => {
            if (enabled) {
              AccessibilityInfo.setAccessibilityFocus(reactTag);
              AccessibilityInfo.setAccessibilityFocus(reactTag);
              AccessibilityInfo.setAccessibilityFocus(reactTag);
              AccessibilityInfo.setAccessibilityFocus(reactTag);
              AccessibilityInfo.setAccessibilityFocus(reactTag);
              AccessibilityInfo.setAccessibilityFocus(reactTag);
              AccessibilityInfo.setAccessibilityFocus(reactTag);
              AccessibilityInfo.setAccessibilityFocus(reactTag);
              AccessibilityInfo.setAccessibilityFocus(reactTag);
              AccessibilityInfo.setAccessibilityFocus(reactTag);
            }
          });
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

    const overlayRef = React.useRef(null);

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
      <View
        nativeID={popoverContentId}
        {...props}
        ref={mergedRef}
        collapsable={false}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          position: 'absolute',
          ...overlayProps?.style,
          ...style,
        }}
        accessible={true}
      >
        {children}
      </View>
    );
  }
);

export { PopoverContent };
