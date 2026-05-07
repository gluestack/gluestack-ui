import React, { forwardRef } from 'react';
import { useControllableState } from '@gluestack-ui/utils/hooks';
import { Overlay } from '../../overlay/creator';
import { PopoverProvider } from './PopoverContext';
import { mergeRefs } from '@gluestack-ui/utils/common';

const POINT_SIZE = 1;

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

export const Popover = (StyledPopover: any) =>
  forwardRef(
    (
      {
        onOpen,
        trigger,
        onClose,
        isOpen: isOpenProp,
        children,
        defaultIsOpen = false,
        initialFocusRef,
        finalFocusRef,
        useRNModal,
        focusScope = true,
        trapFocus = true,
        placement = 'bottom',
        shouldOverlapWithTrigger = false,
        crossOffset,
        offset,
        isKeyboardDismissable = true,
        shouldFlip,
        // @ts-ignore
        _experimentalOverlay = false,
        ...props
      }: any,
      ref?: any
    ) => {
      const [isOpen, setIsOpen] = useControllableState({
        value: isOpenProp,
        defaultValue: defaultIsOpen,
        onChange: (value) => {
          value ? onOpen && onOpen() : onClose && onClose();
        },
      });

      const [bodyMounted, setBodyMounted] = React.useState(false);
      const [headerMounted, setHeaderMounted] = React.useState(false);

      var idCounter = 0;

      function uniqueId(prefix = '') {
        var id = ++idCounter;
        return prefix + id;
      }

      const id = uniqueId();

      const popoverContentId = `${id}-content`;
      const headerId = `${popoverContentId}-header`;
      const bodyId = `${popoverContentId}-body`;

      const handleOpen = React.useCallback(() => {
        setIsOpen(true);
      }, [setIsOpen]);

      const handleClose = React.useCallback(() => {
        setIsOpen(false);
      }, [setIsOpen]);

      const targetRef = React.useRef(null);
      const shouldAnchorToTouchPointRef = React.useRef(false);
      const [lastInteractionPoint, setLastInteractionPoint] = React.useState<{
        x: number;
        y: number;
      } | null>(null);

      const resolvedAnchor = React.useMemo(() => {
        if (!lastInteractionPoint) {
          return null;
        }

        return {
          type: 'point',
          x: lastInteractionPoint.x,
          y: lastInteractionPoint.y,
          width: POINT_SIZE,
          height: POINT_SIZE,
        };
      }, [lastInteractionPoint]);

      const captureInteractionPoint = React.useCallback((event: any) => {
        const pageX = event?.nativeEvent?.pageX ?? event?.pageX;
        const pageY = event?.nativeEvent?.pageY ?? event?.pageY;

        if (
          typeof pageX === 'number' &&
          Number.isFinite(pageX) &&
          typeof pageY === 'number' &&
          Number.isFinite(pageY)
        ) {
          setLastInteractionPoint({ x: pageX, y: pageY });
        }
      }, []);

      const handleTriggerPress = React.useCallback(
        (event: any) => {
          captureInteractionPoint(event);
          handleOpen();
        },
        [captureInteractionPoint, handleOpen]
      );

      const updatedTrigger = (reference: any) => {
        const mergedTriggerRef = mergeRefs([reference, targetRef]);
        const triggerElement = trigger(
          {
            'ref': mergedTriggerRef,
            'onPress': handleTriggerPress,
            'onClick': handleTriggerPress,
            'aria-expanded': isOpen ? true : false,
            'aria-controls': isOpen ? popoverContentId : undefined,
            'aria-haspopup': true,
          },
          { open: isOpen }
        );

        shouldAnchorToTouchPointRef.current = isTextTriggerElement(
          triggerElement,
          mergedTriggerRef
        );

        return triggerElement;
      };

      // let floatingParams: any = {};

      // if (Platform.OS === 'web') {
      //   floatingParams = { whileElementsMounted: autoUpdate };
      // }

      const triggerElement = updatedTrigger(targetRef);
      const activeAnchor = shouldAnchorToTouchPointRef.current
        ? resolvedAnchor
        : null;

      const contextValue: any = React.useMemo(() => {
        return {
          targetRef,
          resolvedAnchor: activeAnchor,
          shouldAnchorToTouchPoint: shouldAnchorToTouchPointRef.current,
          strategy: 'absolute',
          handleClose,
          initialFocusRef,
          finalFocusRef,
          popoverContentId,
          bodyId,
          headerId,
          headerMounted,
          bodyMounted,
          setBodyMounted,
          setHeaderMounted,
          isOpen,
          placement,
          shouldOverlapWithTrigger,
          crossOffset,
          offset,
          focusScope,
          trapFocus,
          shouldFlip,
        };
      }, [
        targetRef,
        activeAnchor,
        handleClose,
        initialFocusRef,
        finalFocusRef,
        popoverContentId,
        bodyId,
        headerId,
        headerMounted,
        bodyMounted,
        setBodyMounted,
        setHeaderMounted,
        isOpen,
        placement,
        shouldOverlapWithTrigger,
        crossOffset,
        offset,
        focusScope,
        trapFocus,
        shouldFlip,
      ]);

      if (_experimentalOverlay) {
        return (
          <>
            {triggerElement}
            <PopoverProvider value={contextValue}>
              <StyledPopover ref={ref} {...props}>
                {children}
              </StyledPopover>
            </PopoverProvider>
          </>
        );
      }

      return (
        <>
          {triggerElement}
          <Overlay
            isOpen={isOpen}
            onRequestClose={handleClose}
            isKeyboardDismissable={isKeyboardDismissable}
            useRNModal={useRNModal}
          >
            <PopoverProvider value={contextValue}>
              <StyledPopover ref={ref} {...props}>
                {children}
              </StyledPopover>
            </PopoverProvider>
          </Overlay>
        </>
      );
    }
  );
