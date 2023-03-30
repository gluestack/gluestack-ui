import React, { forwardRef } from 'react';
import { Platform } from 'react-native';
import {
  useControllableState,
  // useKeyboardBottomInset,
} from '@gluestack-ui/hooks';
import { Overlay } from '@gluestack-ui/overlay';
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
        useRNModal,
        ...props
      }: T & IActionsheetProps,
      ref?: any
    ) => {
      // const bottomInset = useKeyboardBottomInset();
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
          closeOnOverlayClick,
          visible,
          avoidKeyboard,
          // contentSize,
          // bottomInset,
        };
      }, [
        handleClose,
        closeOnOverlayClick,
        visible,
        avoidKeyboard,
        // contentSize,
        // bottomInset,
      ]);

      // const avoidKeyboardSpacer = (
      //   <View
      //     style={{
      //       pointerEvents: 'box-none',
      //       width: '100%',
      //       height: avoidKeyboard ? bottomInset : undefined,
      //     }}
      //   />
      // );

      return (
        <Overlay
          isOpen={visible}
          onRequestClose={handleClose}
          isKeyboardDismissable={isKeyboardDismissable}
          // animationPreset={animationPreset}
          useRNModal={useRNModal}
          unmountOnExit
          // @ts-ignore
          style={overlayStyle}
        >
          <ActionsheetContext.Provider value={contextValue}>
            <StyledActionsheet
              ref={ref}
              style={[StyleSheet.absoluteFill]}
              {...(props as T)}
            >
              {children}
              {/* {avoidKeyboard ? avoidKeyboardSpacer : null} */}
            </StyledActionsheet>
          </ActionsheetContext.Provider>
        </Overlay>
      );
    }
  );
}
