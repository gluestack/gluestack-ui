import React, { forwardRef, useEffect } from 'react';
import { AccessibilityInfo } from 'react-native';
import { StyleSheet } from 'react-native';
import { useControllableState } from '../hooks';
import { PresenceTransition } from '../Transitions';
import { Overlay } from '../Overlay';
import { FocusScope } from '@react-native-aria/focus';
import MenuBackdrop from './MenuBackdrop';
import { Popper } from '@gluestack/popper';
import { MenuProvider } from './MenuContext';
import MenuContent from './MenuContent';

const Menu = (
  {
    closeOnSelect = true,
    children,
    onOpen,
    onClose,
    isOpen: isOpenProp,
    defaultIsOpen,
    placement = 'bottom left',
    ...props
  }: any,
  ref?: any
) => {
  // main provider for Menu main component

  const { useRNModal, ...restProps } = props;

  const triggerRef = React.useRef(null);

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
      ref={triggerRef}
    >
      <PresenceTransition visible={isOpen} style={StyleSheet.absoluteFill}>
        <Popper
          triggerRef={triggerRef}
          onClose={handleClose}
          placement={placement}
        >
          <MenuBackdrop onPress={handleClose} />
          <Popper.Content isOpen={isOpen}>
            <MenuProvider closeOnSelect={closeOnSelect} onClose={handleClose}>
              <FocusScope contain restoreFocus autoFocus>
                <MenuContent menuRef={ref} {...restProps}>
                  {children}
                </MenuContent>
              </FocusScope>
            </MenuProvider>
          </Popper.Content>
        </Popper>
      </PresenceTransition>
    </Overlay>
  );
};

export default forwardRef(Menu);
