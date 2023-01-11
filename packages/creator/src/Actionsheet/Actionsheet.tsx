import React, { forwardRef } from 'react';
import { Platform } from 'react-native';
import { useControllableState } from '../hooks/useControllableState';
import { Overlay } from '../Overlay';
import { Fade } from '../Transitions';
import { ActionsheetContext } from './context';
import { StyleSheet } from 'react-native';
import { useKeyboardBottomInset } from '../hooks';
import type { IActionsheetProps } from './types';

export function Actionsheet<T>(StyledActionsheet: React.ComponentType<T>) {
  return forwardRef(
    (
      {
        children,
        isOpen,
        onClose,
        defaultIsOpen = false,
        avoidKeyboard,
        closeOnOverlayClick = true,
        isKeyboardDismissable = true,
        animationPreset,
        ...props
      }: T & IActionsheetProps,
      ref?: any
    ) => {
      const bottomInset = useKeyboardBottomInset();

      const { contentSize, useRNModal, ...remainingProps } = props;

      const overlayStyle = Platform.OS === 'web' ? { position: 'fixed' } : {};

      const [visible, setVisible] = useControllableState({
        value: isOpen,
        defaultValue: defaultIsOpen,
        onChange: (val) => {
          if (!val) onClose && onClose();
        },
      });

      const handleClose = React.useCallback(
        () => setVisible(false),
        [setVisible]
      );

      const contextValue: any = React.useMemo(() => {
        return {
          handleClose,
          contentSize,
          closeOnOverlayClick,
          visible,
          avoidKeyboard,
          bottomInset,
        };
      }, [
        handleClose,
        contentSize,
        closeOnOverlayClick,
        visible,
        avoidKeyboard,
        bottomInset,
      ]);

      return (
        <Overlay
          isOpen={visible}
          onRequestClose={handleClose}
          isKeyboardDismissable={isKeyboardDismissable}
          animationPreset={animationPreset}
          useRNModalOnAndroid
          useRNModal={useRNModal}
          //@ts-ignore
          _overlay={{ style: { ...overlayStyle } }}
        >
          <Fade
            in={visible}
            style={StyleSheet.absoluteFill}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 200 } }}
            exit={{ opacity: 0, transition: { duration: 100 } }}
          >
            <ActionsheetContext.Provider value={contextValue}>
              <StyledActionsheet ref={ref} {...(remainingProps as T)}>
                {children}
              </StyledActionsheet>
            </ActionsheetContext.Provider>
          </Fade>
        </Overlay>
      );
    }
  );
}
