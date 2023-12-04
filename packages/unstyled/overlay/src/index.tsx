import { OverlayContainer } from '@react-native-aria/overlays';
import React from 'react';
import type { ViewStyle } from 'react-native';
import { Modal, Platform } from 'react-native';
import { useKeyboardDismissable } from '@react-native-aria/interactions';

export const ExitAnimationContext = React.createContext({
  exited: true,
  setExited: (_exited: boolean) => {},
});

export { OverlayProvider } from '@react-native-aria/overlays';
export interface IOverlayProps {
  isOpen?: boolean;
  children?: any;
  // We use RN modal on android if needed as it supports shifting accessiblity focus to the opened view. IOS automatically shifts focus if an absolutely placed view appears in front.
  useRNModalOnAndroid?: boolean;
  useRNModal?: boolean;
  onRequestClose?: any;
  isKeyboardDismissable?: boolean;
  animationPreset?: 'fade' | 'slide' | 'none';
  style?: ViewStyle;
}

const Overlay = ({
  children,
  isOpen,
  useRNModal = false,
  useRNModalOnAndroid = false,
  isKeyboardDismissable = true,
  animationPreset = 'fade',
  onRequestClose,
  style,
  ref,
}: IOverlayProps & { ref?: any }) => {
  const [exited, setExited] = React.useState(!isOpen);

  useKeyboardDismissable({
    enabled: isOpen && isKeyboardDismissable,
    callback: onRequestClose ? onRequestClose : () => {},
  });

  const styleObj = { ...style };

  if (Platform.OS === 'web') {
    styleObj.zIndex = 9999;
  }

  if (animationPreset === 'slide') {
    styleObj.overflow = 'hidden';
    styleObj.display = 'flex';
  } else {
    styleObj.display = exited && !isOpen ? 'none' : 'flex';
  }

  if (!isOpen && exited) {
    return null;
  }

  if (useRNModal || (useRNModalOnAndroid && Platform.OS === 'android')) {
    return (
      <ExitAnimationContext.Provider value={{ exited, setExited }}>
        <Modal
          statusBarTranslucent
          transparent
          visible={isOpen}
          onRequestClose={onRequestClose}
          animationType={animationPreset}
          ref={ref}
        >
          {children}
        </Modal>
      </ExitAnimationContext.Provider>
    );
  }

  return (
    <OverlayContainer style={{ ...styleObj }}>
      <ExitAnimationContext.Provider value={{ exited, setExited }}>
        {children}
      </ExitAnimationContext.Provider>
    </OverlayContainer>
  );
};

Overlay.displayName = 'Overlay';

export { Overlay };
