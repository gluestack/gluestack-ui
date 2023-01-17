import React, { forwardRef } from 'react';
import { useKeyboardDismissable } from '../hooks';
import { usePopover } from './PopoverContext';
import { Platform } from 'react-native';
import { usePopperContext } from '../popper/PopperContext';
import { mergeRefs } from '@universa11y/utils';

const PopoverContent = (StyledPopoverContent: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    const {
      onClose,
      initialFocusRef,
      finalFocusRef,
      popoverContentId,
      headerMounted,
      bodyMounted,
      bodyId,
      headerId,
      isOpen,
    } = usePopover('PopoverContext');

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

    const { value } = usePopperContext('PopperContext');
    const { x, y, strategy, floating } = value;
    const mergedRef = mergeRefs([ref, floating]);
    return (
      <StyledPopoverContent
        nativeID={popoverContentId}
        {...accessibilityProps}
        {...props}
        ref={mergedRef}
        isOpen={isOpen}
        sx={{
          style: {
            position: strategy,
            top: y ?? 10,
            left: x ?? 10,
          },
        }}
      >
        {children}
      </StyledPopoverContent>
    );
  });

export default PopoverContent;
