import React, { forwardRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { AlertDialogContext } from './Context';
import { Overlay } from '@gluestack-ui/overlay';
import { Fade, Slide } from '@gluestack-ui/transitions';
import type { IAlertDialogProps } from './types';
import {
  useControllableState,
  useKeyboardBottomInset,
} from '@gluestack-ui/hooks';

export const AlertDialog = <T,>(StyledAlertDialog: React.ComponentType<T>) =>
  forwardRef(
    (
      {
        children,
        isOpen,
        onClose,
        defaultIsOpen = false,
        initialFocusRef,
        finalFocusRef,
        contentSize,
        avoidKeyboard = false,
        closeOnOverlayClick = true,
        isKeyboardDismissable = true,
        animationPreset = 'fade',
        ...props
      }: T & IAlertDialogProps,
      ref: any
    ) => {
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
          contentSize,
          initialFocusRef,
          finalFocusRef,
          closeOnOverlayClick,
          avoidKeyboard,
          bottomInset,
          visible,
        };
      }, [
        handleClose,
        contentSize,
        initialFocusRef,
        closeOnOverlayClick,
        finalFocusRef,
        avoidKeyboard,
        bottomInset,
        visible,
      ]);

      return (
        <Overlay
          isOpen={visible}
          onRequestClose={handleClose}
          isKeyboardDismissable={isKeyboardDismissable}
          animationPreset={animationPreset}
        >
          <AlertDialogContext.Provider value={contextValue}>
            {animationPreset === 'slide' ? (
              <Slide in={visible}>
                <StyledAlertDialog {...(props as T)}>
                  {children}
                  {avoidKeyboard ? avoidKeyboardSpacer : null}
                </StyledAlertDialog>
              </Slide>
            ) : (
              <Fade
                in={visible}
                style={StyleSheet.absoluteFill}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 200 } }}
                exit={{ opacity: 0, transition: { duration: 100 } }}
              >
                <StyledAlertDialog {...(props as T)} ref={ref}>
                  {children}
                  {avoidKeyboard ? avoidKeyboardSpacer : null}
                </StyledAlertDialog>
              </Fade>
            )}
          </AlertDialogContext.Provider>
        </Overlay>
      );
    }
  );
