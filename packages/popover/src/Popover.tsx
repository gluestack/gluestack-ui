import React, { forwardRef } from 'react';
import { useControllableState } from '@gluestack-ui/hooks';
import { Overlay } from '@gluestack-ui/overlay';
import { StyleSheet } from 'react-native';
import { PresenceTransition } from '@gluestack-ui/transitions';
import { PopoverProvider } from './PopoverContext';
import { FocusScope as FocusScopeAria } from '@react-native-aria/focus';

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
        shouldOverlapWithTrigger = false,
        crossOffset,
        offset,
        triggerRef,
        focusScope = true,
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
        if (trigger) {
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
        }
        return null;
      };

      const targetRefTemp = React.useRef(null);
      const targetRef = triggerRef || targetRefTemp;
      return (
        <>
          {updatedTrigger(targetRef)}
          <Overlay
            isOpen={isOpen}
            onRequestClose={handleClose}
            isKeyboardDismissable
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
              <PopoverProvider
                value={{
                  onClose: handleClose,
                  targetRef,
                  strategy: 'absolute',
                  handleClose: handleClose,
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
                }}
              >
                <StyledPopover ref={ref} {...props}>
                  <FocusScopeComponent
                    trapFocus={trapFocus}
                    focusScope={focusScope}
                  >
                    {children}
                  </FocusScopeComponent>
                </StyledPopover>
              </PopoverProvider>
            </PresenceTransition>
          </Overlay>
        </>
      );
    }
  );

const FocusScopeComponent = ({ trapFocus, focusScope, children }: any) => {
  if (focusScope)
    return (
      <FocusScopeAria contain={trapFocus} restoreFocus autoFocus>
        {children}
      </FocusScopeAria>
    );
  return children;
};
