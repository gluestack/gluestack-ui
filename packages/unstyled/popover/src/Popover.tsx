import React, { forwardRef } from 'react';
import { useControllableState } from '@gluestack-ui/hooks';
import { Overlay } from '@gluestack-ui/overlay';

// import { useOverlayPosition } from '@react-native-aria/overlays';
import { PopoverProvider } from './PopoverContext';

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

      const updatedTrigger = (reference: any) => {
        return trigger(
          {
            'ref': reference,
            'onPress': handleOpen,
            'aria-expanded': isOpen ? true : false,
            'aria-controls': isOpen ? popoverContentId : undefined,
            'aria-haspopup': true,
          },
          { open: isOpen }
        );
      };

      // let floatingParams: any = {};

      // if (Platform.OS === 'web') {
      //   floatingParams = { whileElementsMounted: autoUpdate };
      // }

      const targetRef = React.useRef(null);

      const contextValue: any = React.useMemo(() => {
        return {
          targetRef,
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
            {updatedTrigger(targetRef)}
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
          {updatedTrigger(targetRef)}
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
