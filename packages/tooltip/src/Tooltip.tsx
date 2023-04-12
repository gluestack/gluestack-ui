import React, { forwardRef } from 'react';
import { useControllableState } from '@gluestack-ui/hooks';
import { useKeyboardDismissable } from '@gluestack-ui/react-native-aria';
import { TooltipProvider } from './context';
import type { ITooltipProps } from './types';
import { useId } from '@react-native-aria/utils';
import { Platform } from 'react-native';

function Tooltip<StyledTooltipProp>(
  StyledTooltip: React.ComponentType<StyledTooltipProp>
) {
  return forwardRef(
    (
      {
        children,
        placement = 'bottom',
        onOpen,
        onClose,
        isOpen: isOpenProp,
        defaultIsOpen = false,
        trigger,
        crossOffset,
        offset = 10,
        shouldOverlapWithTrigger = false,
        shouldFlip,
        ...props
      }: ITooltipProps,
      ref: any
    ) => {
      const [isOpen, setIsOpen] = useControllableState({
        value: isOpenProp,
        defaultValue: defaultIsOpen,
        onChange: (value) => {
          value ? onOpen && onOpen() : onClose && onClose();
        },
      });

      const handleOpen = React.useCallback(() => {
        setIsOpen(true);
      }, [setIsOpen]);

      const handleClose = React.useCallback(() => {
        setIsOpen(false);
      }, [setIsOpen]);

      const tooltipID = useId(props?.nativeId);

      const updatedTrigger = (reference: any) => {
        return trigger(
          {
            ref: reference,
            onHoverIn: handleOpen,
            onHoverOut: handleClose,
            collapsable: false,
            accessibilityDescribedBy: isOpen ? tooltipID : undefined,
          },
          { open: isOpen }
        );
      };

      const targetRef = React.useRef(null);

      useKeyboardDismissable({
        enabled: isOpen,
        callback: () => setIsOpen(false),
      });

      return (
        <>
          {updatedTrigger(targetRef)}
          <StyledTooltip
            {...(props as StyledTooltipProp)}
            ref={ref}
            accessibilityRole={Platform.OS === 'web' ? 'tooltip' : undefined}
            focussable={false}
            nativeID={tooltipID}
          >
            <TooltipProvider
              value={{
                placement,
                targetRef,
                handleClose: handleClose,
                isOpen,
                crossOffset,
                offset,
                shouldOverlapWithTrigger,
                shouldFlip,
              }}
            >
              {children}
            </TooltipProvider>
          </StyledTooltip>
        </>
      );
    }
  );
}

export { Tooltip };
