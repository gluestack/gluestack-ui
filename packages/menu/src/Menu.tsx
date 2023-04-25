import React, { forwardRef, useEffect } from 'react';
import { AccessibilityInfo, StyleSheet } from 'react-native';
import { useControllableState } from '@gluestack-ui/hooks';
import { PresenceTransition } from '@gluestack-ui/transitions';
import { Overlay } from '@gluestack-ui/overlay';
import { MenuProvider } from './context';
import { useMenuTrigger } from './useMenu';

const Menu = (StyledMenu: any) =>
  forwardRef(
    (
      {
        children,
        placement = 'bottom',
        onOpen,
        onClose,
        isOpen: isOpenProp,
        defaultIsOpen,
        closeOnOverlayClick = true,
        trigger,
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

      const { useRNModal, ...remProps } = props;

      const handleOpen = React.useCallback(() => {
        setIsOpen(true);
      }, [setIsOpen]);

      const handleClose = React.useCallback(() => {
        setIsOpen(false);
      }, [setIsOpen]);

      const triggerProps = useMenuTrigger({
        handleOpen,
        isOpen,
      });

      const updatedTrigger = (reference: any) => {
        return trigger(
          {
            ...triggerProps,
            ref: reference,
            onPress: handleOpen,
            collapsable: false,
          },
          { open: isOpen }
        );
      };

      // let floatingParams: any = {};

      // if (Platform.OS === 'web') {
      //   floatingParams = { whileElementsMounted: autoUpdate };
      // }
      const targetRef = React.useRef(null);

      // const { x, y, reference, floating, strategy } = useFloating({
      //   placement: placement,
      //   middleware: [offset(10), flip(), shift()],
      //   ...floatingParams,
      // });

      useEffect(() => {
        if (isOpen) {
          AccessibilityInfo.announceForAccessibility('Popup window');
        }
      }, [isOpen]);

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
              exit={{ opacity: 0, transition: { duration: 100 } }}
              visible={isOpen}
              style={StyleSheet.absoluteFill}
            >
              <StyledMenu {...remProps} ref={ref}>
                <MenuProvider
                  value={{
                    targetRef,
                    handleClose: handleClose,
                    closeOnOverlayClick: closeOnOverlayClick,
                    placement,
                  }}
                >
                  {children}
                </MenuProvider>
              </StyledMenu>
            </PresenceTransition>
          </Overlay>
        </>
      );
    }
  );

export default Menu;
