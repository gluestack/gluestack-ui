/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import { Platform, View } from 'react-native';
import {
  useControllableState,
  useKeyboardBottomInset,
} from '@gluestack-ui/hooks';
import { Overlay } from '@gluestack-ui/overlay';
import { Fade } from '@gluestack-ui/transitions';
import { ActionsheetContext } from './context';
import { StyleSheet } from 'react-native';
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

      const avoidKeyboardSpacer = (
        <View
          style={{
            // @ts-ignore
            pointerEvents: 'box-none',
            width: '100%',
            height: avoidKeyboard ? bottomInset : undefined,
          }}
        />
      );

      return (
        <Overlay
          isOpen={visible}
          onRequestClose={handleClose}
          isKeyboardDismissable={isKeyboardDismissable}
          animationPreset={animationPreset}
          useRNModal={useRNModal}
          // @ts-ignore
          style={overlayStyle}
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
                {avoidKeyboard ? avoidKeyboardSpacer : null}
              </StyledActionsheet>
            </ActionsheetContext.Provider>
          </Fade>
        </Overlay>
      );
    }
  );
}
