/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import { Platform, View } from 'react-native';
import { AlertDialogContext } from './Context';
import { Overlay } from '@gluestack-ui/overlay';
import {
  useControllableState,
  useKeyboardBottomInset,
} from '@gluestack-ui/hooks';

export const AlertDialog = (StyledAlertDialog: any) =>
  forwardRef(
    (
      {
        children,
        isOpen,
        onClose,
        defaultIsOpen = false,
        initialFocusRef,
        finalFocusRef,
        avoidKeyboard = false,
        closeOnOverlayClick = true,
        isKeyboardDismissable = true,
        animationPreset = 'fade',
        // @ts-ignore
        _experimentalOverlay = false,
        ...props
      }: any,
      ref?: any
    ) => {
      const pointerEvents = Platform.OS === 'web' ? 'box-none' : undefined;
      const bottomInset = useKeyboardBottomInset();

      const [visible, setVisible] = useControllableState({
        value: isOpen,
        defaultValue: defaultIsOpen,
        onChange: (val: any) => {
          if (!val) onClose && onClose();
        },
      });
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

      const handleClose = React.useCallback(
        () => setVisible(false),
        [setVisible]
      );

      const contextValue = React.useMemo(() => {
        return {
          handleClose,
          initialFocusRef,
          finalFocusRef,
          closeOnOverlayClick,
          avoidKeyboard,
          bottomInset,
          visible,
        };
      }, [
        handleClose,
        initialFocusRef,
        closeOnOverlayClick,
        finalFocusRef,
        avoidKeyboard,
        bottomInset,
        visible,
      ]);

      if (_experimentalOverlay) {
        return (
          <AlertDialogContext.Provider value={contextValue}>
            <StyledAlertDialog
              ref={ref}
              style={[{ pointerEvents }, { ...props.style }]}
              {...props}
            >
              {children}
              {avoidKeyboard ? avoidKeyboardSpacer : null}
            </StyledAlertDialog>
          </AlertDialogContext.Provider>
        );
      }

      return (
        <Overlay
          isOpen={visible}
          onRequestClose={handleClose}
          isKeyboardDismissable={isKeyboardDismissable}
          animationPreset={animationPreset}
        >
          <AlertDialogContext.Provider value={contextValue}>
            <StyledAlertDialog
              {...props}
              ref={ref}
              style={[{ pointerEvents }, { ...props.style }]}
            >
              {children}
              {avoidKeyboard ? avoidKeyboardSpacer : null}
            </StyledAlertDialog>
          </AlertDialogContext.Provider>
        </Overlay>
      );
    }
  );
