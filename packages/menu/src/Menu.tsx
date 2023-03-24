import React, { forwardRef, useEffect } from 'react';
import { AccessibilityInfo, StyleSheet } from 'react-native';
import { useControllableState } from '@gluestack-ui/hooks';
import { PresenceTransition } from '@gluestack-ui/transitions';
import { Overlay } from '@gluestack-ui/overlay';
import { MenuProvider } from './context';
// import { useMenuTrigger } from './useMenu';

import { useMenuTriggerState } from '@react-stately/menu';

import { useMenuTrigger } from '@react-native-aria/menu';

const Menu = (StyledMenu: any) =>
  forwardRef(
    (
      {
        children,
        placement = 'bottom',
        onOpen,
        onClose,
        defaultIsOpen,
        closeOnOverlayClick = true,
        trigger,
        ...props
      }: any,
      ref: any
    ) => {
      // const [isOpen, setIsOpen] = useControllableState({
      //   value: props.isOpen,
      //   defaultValue: defaultIsOpen,
      //   onChange: (value) => {
      //     value ? onOpen && onOpen() : onClose && onClose();
      //   },
      // });

      let state = useMenuTriggerState(props);

      const { useRNModal, ...remProps } = props;

      // const handleOpen = React.useCallback(() => {
      //   setIsOpen(true);
      // }, [setIsOpen]);

      // const handleClose = React.useCallback(() => {
      //   setIsOpen(false);
      // }, [setIsOpen]);

      // const triggerProps = useMenuTrigger({
      //   handleOpen,
      //   isOpen,
      // });
      const targetRef = React.useRef(null);

      const { menuTriggerProps, menuProps } = useMenuTrigger(
        {},
        state,
        targetRef
      );

      console.log(menuTriggerProps, menuProps, state, 'hello');
      // const []

      const updatedTrigger = (reference: any) => {
        return trigger(
          {
            ...menuTriggerProps,
            ref: reference,
            // onPress: handleOpen,
            collapsable: false,
          },
          { open: state.isOpen }
        );
      };

      // let floatingParams: any = {};

      // if (Platform.OS === 'web') {
      //   floatingParams = { whileElementsMounted: autoUpdate };
      // }

      // const { x, y, reference, floating, strategy } = useFloating({
      //   placement: placement,
      //   middleware: [offset(10), flip(), shift()],
      //   ...floatingParams,
      // });

      // useEffect(() => {
      //   if (isOpen) {
      //     AccessibilityInfo.announceForAccessibility('Popup window');
      //   }
      // }, [isOpen]);

      return (
        <>
          {updatedTrigger(targetRef)}
          <Overlay
            isOpen={state.isOpen}
            onRequestClose={state.close}
            isKeyboardDismissable
            useRNModal={useRNModal}
            unmountOnExit
          >
            <PresenceTransition
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 150 } }}
              exit={{ opacity: 0, transition: { duration: 100 } }}
              visible={state.isOpen}
              style={StyleSheet.absoluteFill}
            >
              <StyledMenu {...remProps} {...menuProps} ref={ref}>
                <MenuProvider
                  value={{
                    targetRef,
                    handleClose: state.close,
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
