import React, { forwardRef } from 'react';
import {
  useControllableState,
  useKeyboardDismissable,
} from '@gluestack-ui/hooks';
import { TooltipProvider } from './context';
import type { ITooltipProps } from './types';

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

      const updatedTrigger = (reference: any) => {
        return trigger(
          {
            ref: reference,
            onHoverIn: handleOpen,
            onHoverOut: handleClose,
            collapsable: false,
          },
          { open: isOpen }
        );
      };

      // const { x, y, reference, floating, strategy } = useFloating({
      //   placement: placement,
      //   middleware: [offset(10), flip(), shift()],
      // });
      let targetRef = React.useRef(null);
      useKeyboardDismissable({
        enabled: isOpen,
        callback: () => setIsOpen(false),
      });

      return (
        <>
          {updatedTrigger(targetRef)}
          <StyledTooltip {...(props as StyledTooltipProp)} ref={ref}>
            <TooltipProvider
              value={{
                placement,
                targetRef,
                handleClose: handleClose,
                isOpen,
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
