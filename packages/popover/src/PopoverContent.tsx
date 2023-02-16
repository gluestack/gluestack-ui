import React, { forwardRef } from 'react';
import { useKeyboardDismissable } from '@universa11y/hooks';
import { usePopover } from './PopoverContext';
import { Platform } from 'react-native';
// import { usePopperContext } from '../../popper/src/PopperContext';
import { mergeRefs } from '@universa11y/utils';
import { useOverlayPosition } from '@react-native-aria/overlays';

const PopoverContent = (StyledPopoverContent: any) =>
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
      offset: 10,
    });

    const mergedRef = mergeRefs([ref, overlayRef]);

    // console.log('PopoverContent', overlayProps, rest);
    return (
      <StyledPopoverContent
        nativeID={popoverContentId}
        {...accessibilityProps}
        {...props}
        ref={mergedRef}
        isOpen={isOpen}
        collapsable={false}
        style={{
          ...style,
          position: 'absolute',
          ...overlayProps?.style,
        }}
      >
        {children}
      </StyledPopoverContent>
    );
  });

export default PopoverContent;
