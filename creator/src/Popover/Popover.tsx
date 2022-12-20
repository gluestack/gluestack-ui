import React, { forwardRef } from 'react';
import { useControllableState } from '../hooks';
import { Overlay } from '../Overlay';
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
} from '@floating-ui/react';
import { StyleSheet } from 'react-native';
import { PresenceTransition } from '../Transitions';
import { PopperProvider } from '../Popper/PopperContext';
import { PopoverProvider } from './PopoverContext';
import { FocusScope } from '@react-native-aria/focus';

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
        trapFocus = true,
        placement = 'bottom',
        ...props
      }: any,
      ref: any
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

      const { x, y, reference, floating, strategy } = useFloating({
        placement: placement,
        middleware: [offset(10), flip(), shift()],
        whileElementsMounted: autoUpdate,
      });

      return (
        <>
          {updatedTrigger(reference)}
          <Overlay
            isOpen={isOpen}
            onRequestClose={handleClose}
            isKeyboardDismissable
            useRNModalOnAndroid
            useRNModal={useRNModal}
            unmountOnExit
          >
            <PresenceTransition
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 150 } }}
              exit={{
                opacity: 0,
                scale: 0.95,
                transition: { duration: 100 },
              }}
              visible={isOpen}
              style={StyleSheet.absoluteFill}
            >
              <PopperProvider
                value={{
                  x: x,
                  y: y,
                  strategy: strategy,
                  floating: floating,
                  handleClose: handleClose,
                }}
              >
                <PopoverProvider
                  value={{
                    onClose: handleClose,
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
                  }}
                >
                  <StyledPopover ref={ref} {...props}>
                    <FocusScope contain={trapFocus} restoreFocus autoFocus>
                      {children}
                    </FocusScope>
                  </StyledPopover>
                </PopoverProvider>
              </PopperProvider>
            </PresenceTransition>
          </Overlay>
        </>
      );
    }
  );
