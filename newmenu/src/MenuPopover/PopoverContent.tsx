import React, { forwardRef } from 'react';
import { useKeyboardDismissable } from '@gluestack-ui/hooks';
import { usePopover } from './PopoverContext';
import { Platform, View } from 'react-native';
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
      headerMounted,
      bodyMounted,
      bodyId,
      headerId,
      placement,
      shouldOverlapWithTrigger,
      crossOffset,
      offset,
    } = value;
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

    const mergedRef = mergeRefs([ref, overlayRef]);

    return (
      <View
        nativeID={popoverContentId}
        {...accessibilityProps}
        {...props}
        ref={mergedRef}
        collapsable={false}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          position: 'absolute',
          ...overlayProps?.style,
          ...style,
        }}
      >
        {children}
      </View>
    );
  }
);

export { PopoverContent };
