import React, { forwardRef } from 'react';
import { useControllableState } from '@gluestack-ui/hooks';
import { useKeyboardDismissable } from '@gluestack-ui/react-native-aria';
import { PresenceTransition } from '@gluestack-ui/transitions';
import { StyleSheet } from 'react-native';
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

      let tooltipID = useId(props?.nativeId);

      const updatedTrigger = (reference: any) => {
        return trigger(
          {
            ref: reference,
            onHoverIn: handleOpen,
            onHoverOut: handleClose,
            collapsable: false,
            // accessibilityDescribedBy: isOpen ? tooltipID : undefined,
          },
          { open: isOpen }
        );
      };

      let targetRef = React.useRef(null);

      useKeyboardDismissable({
        enabled: isOpen,
        callback: () => setIsOpen(false),
      });

      return (
        <>
          {updatedTrigger(targetRef)}
          {isOpen && (
            <PresenceTransition
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 150 } }}
              exit={{ opacity: 0, transition: { duration: 100 } }}
              visible={isOpen}
              style={StyleSheet.absoluteFill}
            >
              <StyledTooltip
                {...(props as StyledTooltipProp)}
                ref={ref}
                accessibilityRole={
                  Platform.OS === 'web' ? 'tooltip' : undefined
                }
                nativeID={tooltipID}
              >
                <TooltipProvider
                  value={{
                    placement,
                    targetRef,
                    handleClose: handleClose,
                  }}
                >
                  {children}
                </TooltipProvider>
              </StyledTooltip>
            </PresenceTransition>
          )}
        </>
      );
    }
  );
}

export { Tooltip };
