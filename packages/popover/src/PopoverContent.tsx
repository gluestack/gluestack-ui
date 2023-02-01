import React, { forwardRef } from 'react';
import { useKeyboardDismissable } from '@universa11y/hooks';
import { usePopover } from './PopoverContext';
import { Platform } from 'react-native';
// import { usePopperContext } from '../../popper/src/PopperContext';
import { mergeRefs } from '@universa11y/utils';

const PopoverContent = (StyledPopoverContent: any) =>
  forwardRef(({ children, style, ...props }: any, ref: any) => {
    const { value } = usePopover('PopoverContext');
    const {
      x,
      y,
      strategy,
      onClose,
      initialFocusRef,
      finalFocusRef,
      popoverContentId,
      headerMounted,
      bodyMounted,
      bodyId,
      headerId,
      isOpen,
      floating,
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
    const mergedRef = mergeRefs([ref, floating]);
    return (
      <StyledPopoverContent
        nativeID={popoverContentId}
        {...accessibilityProps}
        {...props}
        ref={mergedRef}
        isOpen={isOpen}
        style={{
          ...style,
          position: strategy,
          top: y ?? 10,
          left: x ?? 10,
        }}
      >
        {children}
      </StyledPopoverContent>
    );
  });

export default PopoverContent;
