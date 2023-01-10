import React, { forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import { useControllableState } from '../hooks';
import { AlertDialogContext } from './Context';
import { Overlay } from '../Overlay';
import { Fade, Slide } from '../Transitions';
import type { IAlertDialogProps } from './types';

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
        closeOnOverlayClick = true,
        isKeyboardDismissable = true,
        animationPreset = 'fade',
        ...props
      }: T & IAlertDialogProps,
      ref: any
    ) => {
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

      const contextValue = React.useMemo(() => {
        return {
          handleClose,
          contentSize,
          initialFocusRef,
          finalFocusRef,
          closeOnOverlayClick,
          visible,
        };
      }, [
        handleClose,
        contentSize,
        initialFocusRef,
        closeOnOverlayClick,
        finalFocusRef,
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
                </StyledAlertDialog>
              </Fade>
            )}
          </AlertDialogContext.Provider>
        </Overlay>
      );
    }
  );
