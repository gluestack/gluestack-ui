import React, { forwardRef, useEffect } from 'react';
import { AccessibilityInfo, StyleSheet } from 'react-native';
import { useControllableState } from '../hooks';
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
} from '@floating-ui/react';

import { PresenceTransition } from '../Transitions';
import { Overlay } from '../Overlay';
import { PopperProvider } from '../Popper/PopperContext';
import { useMenuTrigger } from './useMenu';

const Menu = (StyledMenu: any) =>
  forwardRef(
    ({
      children,
      placement = 'bottom',
      onOpen,
      onClose,
      isOpen: isOpenProp,
      defaultIsOpen,
      trigger,
      ...props
    }: any) => {
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
          },
          { open: isOpen }
        );
      };

      const { x, y, reference, floating, strategy } = useFloating({
        placement: placement,
        middleware: [offset(10), flip(), shift()],
        whileElementsMounted: autoUpdate,
      });

      useEffect(() => {
        if (isOpen) {
          AccessibilityInfo.announceForAccessibility('Popup window');
        }
      }, [isOpen]);

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
              visible={isOpen}
              style={StyleSheet.absoluteFill}
            >
              <StyledMenu {...remProps}>
                <PopperProvider
                  value={{
                    x: x,
                    y: y,
                    strategy: strategy,
                    floating: floating,
                    handleClose: handleClose,
                  }}
                >
                  {children}
                </PopperProvider>
              </StyledMenu>
            </PresenceTransition>
          </Overlay>
        </>
      );
    }
  );

export default Menu;
