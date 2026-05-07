import React, { forwardRef } from 'react';
import { useControllableState } from '@gluestack-ui/utils/hooks';
import { useKeyboardDismissable } from '@gluestack-ui/utils/aria';
import { TooltipProvider } from './context';
import type { ITooltipProps } from './types';
import { useId } from '@gluestack-ui/utils/aria';
import { Platform } from 'react-native';
import { Overlay } from '../../overlay/creator';
import { composeEventHandlers, mergeRefs } from '@gluestack-ui/utils/common';

const INLINE_TEXT_ANCHOR_SIZE = 24;

const getElementRef = (element: any) => element?.props?.ref ?? element?.ref;

const getElementTypeName = (type: any) =>
  type?.displayName ||
  type?.name ||
  type?.render?.displayName ||
  type?.render?.name;

const isTextElementType = (type: any) => {
  const name = getElementTypeName(type);

  return name === 'Text';
};

const isTextTriggerElement = (element: any, reference: any): boolean => {
  if (!React.isValidElement(element)) {
    return false;
  }

  if (getElementRef(element) === reference) {
    return isTextElementType(element.type);
  }

  return React.Children.toArray((element as any).props?.children).some(
    (child) => isTextTriggerElement(child, reference)
  );
};

const isFiniteNumber = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value);

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

      const targetRef = React.useRef(null);
      const isTextTriggerRef = React.useRef(false);
      const shouldAnchorToTouchPointRef = React.useRef(false);
      const [lastInteractionAnchor, setLastInteractionAnchor] = React.useState<{
        x: number;
        y: number;
        width: number;
        height: number;
      } | null>(null);

      const resolvedAnchor = React.useMemo(() => {
        if (!lastInteractionAnchor) {
          return null;
        }

        return {
          type: 'point',
          x: lastInteractionAnchor.x,
          y: lastInteractionAnchor.y,
          width: lastInteractionAnchor.width,
          height: lastInteractionAnchor.height,
        };
      }, [lastInteractionAnchor]);

      const captureInteractionPoint = React.useCallback((event: any) => {
        const nativeEvent = event?.nativeEvent ?? event;
        const pageX = nativeEvent?.pageX;
        const pageY = nativeEvent?.pageY;

        if (!isFiniteNumber(pageX) || !isFiniteNumber(pageY)) {
          shouldAnchorToTouchPointRef.current = false;
          return;
        }

        const fallbackToPointerAnchor = () => {
          if (!isTextTriggerRef.current) {
            shouldAnchorToTouchPointRef.current = false;
            return;
          }

          setLastInteractionAnchor({
            x: pageX - INLINE_TEXT_ANCHOR_SIZE / 2,
            y: pageY - INLINE_TEXT_ANCHOR_SIZE / 2,
            width: INLINE_TEXT_ANCHOR_SIZE,
            height: INLINE_TEXT_ANCHOR_SIZE,
          });
          shouldAnchorToTouchPointRef.current = true;
        };

        if (!targetRef.current?.measureInWindow) {
          fallbackToPointerAnchor();
          return;
        }

        targetRef.current.measureInWindow(
          (x: number, y: number, width: number, height: number) => {
            const isValidLayout =
              isFiniteNumber(x) &&
              isFiniteNumber(y) &&
              isFiniteNumber(width) &&
              isFiniteNumber(height) &&
              width > 0 &&
              height > 0;

            if (isValidLayout) {
              const relativeY = Math.min(Math.max(pageY - y, 0), height);

              setLastInteractionAnchor({
                x,
                y: y + relativeY,
                width,
                height: 1,
              });
              shouldAnchorToTouchPointRef.current = true;
              return;
            }

            fallbackToPointerAnchor();
          }
        );
      }, []);

      const handleLongPress = React.useCallback(
        (event: any) => {
          captureInteractionPoint(event);
          openWithDelay();
        },
        [captureInteractionPoint, openWithDelay]
      );

      React.useEffect(
        () => () => {
          clearTimeout(enterTimeout.current);
          clearTimeout(exitTimeout.current);
        },
        []
      );

      const updatedTrigger = (reference: any) => {
        const mergedTriggerRef = mergeRefs([reference, targetRef]);
        const triggerElement = trigger(
          {
            'ref': mergedTriggerRef,
            'collapsable': false,
            'onPress': composeEventHandlers<any>(
              // newChildren.props.onPress,
              () => {
                if (closeOnClick) {
                  closeWithDelay();
                }
              }
            ),
            'onLongPress': composeEventHandlers<any>(
              // newChildren.props.onLongPress,
              handleLongPress
            ),
            'onPressOut': composeEventHandlers<any>(
              // newChildren.props.onPressOut,
              closeWithDelay
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

        isTextTriggerRef.current = isTextTriggerElement(
          triggerElement,
          mergedTriggerRef
        );
        if (!isTextTriggerRef.current) {
          shouldAnchorToTouchPointRef.current = false;
        }

        return triggerElement;
      };

      const triggerElement = updatedTrigger(targetRef);
      const activeAnchor = shouldAnchorToTouchPointRef.current
        ? resolvedAnchor
        : null;

      useKeyboardDismissable({
        enabled: isOpen,
        callback: () => setIsOpen(false),
      });

      if (_experimentalOverlay) {
        return (
          <>
            {triggerElement}
            <TooltipProvider
              value={{
                placement,
                targetRef,
                resolvedAnchor: activeAnchor,
                shouldAnchorToTouchPoint: shouldAnchorToTouchPointRef.current,
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
          {triggerElement}
          <Overlay isOpen={isOpen} onRequestClose={handleClose}>
            <TooltipProvider
              value={{
                placement,
                targetRef,
                resolvedAnchor: activeAnchor,
                shouldAnchorToTouchPoint: shouldAnchorToTouchPointRef.current,
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
