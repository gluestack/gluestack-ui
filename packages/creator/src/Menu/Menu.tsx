import React, { forwardRef, useEffect } from 'react';
import { AccessibilityInfo } from 'react-native';
import { StyleSheet } from 'react-native';
import { useControllableState } from '../hooks';
import { PresenceTransition } from '../Transitions';
import { Overlay } from '../Overlay';
import { Popper } from '@gluestack/popper';

const Menu = (StyledMenu: any) =>
  forwardRef(
    (
      {
        children,
        onOpen,
        onClose,
        isOpen: isOpenProp,
        defaultIsOpen,
        placement = 'bottom',
        triggerRef,
        ...props
      }: any,
      ref: any
    ) => {
      const { useRNModal, ...remProps } = props;

      const [isOpen, setIsOpen] = useControllableState({
        value: isOpenProp,
        defaultValue: defaultIsOpen,
        onChange: (value) => {
          value ? onOpen && onOpen() : onClose && onClose();
        },
      });

      const handleClose = React.useCallback(() => {
        setIsOpen(false);
      }, [setIsOpen]);

      useEffect(() => {
        if (isOpen) {
          AccessibilityInfo.announceForAccessibility('Popup window');
        }
      }, [isOpen]);

      return (
        <Overlay
          isOpen={isOpen}
          onRequestClose={handleClose}
          useRNModalOnAndroid
          useRNModal={useRNModal}
          unmountOnExit
        >
          <PresenceTransition visible={isOpen} style={StyleSheet.absoluteFill}>
            <Popper
              triggerRef={triggerRef}
              onClose={handleClose}
              placement={placement}
            >
              <StyledMenu ref={ref} {...remProps}>
                {children}
              </StyledMenu>
            </Popper>
          </PresenceTransition>
        </Overlay>
      );
    }
  );

export default Menu;
