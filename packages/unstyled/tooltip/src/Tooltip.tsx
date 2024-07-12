import React, { forwardRef } from 'react';
import { useControllableState } from '@gluestack-ui/hooks';
import { useKeyboardDismissable } from '@react-native-aria/interactions';
import { TooltipProvider } from './context';
import type { ITooltipProps } from './types';
import { useId } from '@react-native-aria/utils';
import { Platform } from 'react-native';
import { Overlay } from '@gluestack-ui/overlay';
import { composeEventHandlers } from '@gluestack-ui/utils';

function Tooltip<StyledTooltipProp>(
  StyledTooltip: React.ComponentType<StyledTooltipProp>
) {
  return forwardRef(
    (
      {
        isOpen: isOpenProp,
        isDisabled,
        defaultIsOpen = false,
        onClose,
        onOpen,
        openDelay = 350,
        closeDelay = 0,
        placement = 'bottom',
        children,
        closeOnClick = true,
        trigger,
        crossOffset,
        offset = 10,
        shouldOverlapWithTrigger = false,
        shouldFlip = true,
        // @ts-ignore
        _experimentalOverlay = false,
        ...props
      }: ITooltipProps,
      ref?: any
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

      const enterTimeout = React.useRef<any>();
      const exitTimeout = React.useRef<any>();

      const openWithDelay = React.useCallback(() => {
        if (!isDisabled) {
          enterTimeout.current = setTimeout(handleOpen, openDelay);
        }
      }, [isDisabled, handleOpen, openDelay]);

      const closeWithDelay = React.useCallback(() => {
        if (enterTimeout.current) {
          clearTimeout(enterTimeout.current);
        }
        exitTimeout.current = setTimeout(handleClose, closeDelay);
      }, [closeDelay, handleClose]);

      const tooltipID = useId();

      React.useEffect(
        () => () => {
          clearTimeout(enterTimeout.current);
          clearTimeout(exitTimeout.current);
        },
        []
      );

      const updatedTrigger = (reference: any) => {
        return trigger(
          {
            'ref': reference,
            'collapsable': false,
            'onPress': composeEventHandlers<any>(
              // newChildren.props.onPress,
              () => {
                if (closeOnClick) {
                  closeWithDelay();
                }
              }
            ),
            'onFocus': composeEventHandlers<any>(
              // newChildren.props.onFocus,
              openWithDelay
            ),
            'onBlur': composeEventHandlers<any>(
              // newChildren.props.onBlur,
              closeWithDelay
            ),
            'onMouseEnter': composeEventHandlers<any>(
              // newChildren.props.onMouseEnter,
              openWithDelay
            ),
            'onMouseLeave': composeEventHandlers<any>(
              // newChildren.props.onMouseLeave,
              closeWithDelay
            ),
            // 'ref': mergeRefs([newChildren.ref, targetRef]),
            'aria-describedby': isOpen ? tooltipID : undefined,
          },
          { open: isOpen }
        );
      };

      const targetRef = React.useRef(null);

      useKeyboardDismissable({
        enabled: isOpen,
        callback: () => setIsOpen(false),
      });

      if (_experimentalOverlay) {
        return (
          <>
            {updatedTrigger(targetRef)}
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
              <StyledTooltip
                {...(props as StyledTooltipProp)}
                ref={ref}
                role={Platform.OS === 'web' ? 'tooltip' : undefined}
                tabIndex={-1}
                id={tooltipID}
              >
                {children}
              </StyledTooltip>
            </TooltipProvider>
          </>
        );
      }

      return (
        <>
          {updatedTrigger(targetRef)}
          <Overlay isOpen={isOpen} onRequestClose={handleClose}>
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
              <StyledTooltip
                {...(props as StyledTooltipProp)}
                ref={ref}
                role={Platform.OS === 'web' ? 'tooltip' : undefined}
                focussable={false}
                id={tooltipID}
              >
                {children}
              </StyledTooltip>
            </TooltipProvider>
          </Overlay>
        </>
      );
    }
  );
}

export { Tooltip };
