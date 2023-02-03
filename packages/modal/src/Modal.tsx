/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import {
  useControllableState,
  useKeyboardBottomInset,
} from '@universa11y/hooks';
import { ModalContext } from './Context';
import { Overlay } from '@universa11y/overlay';
import { Fade, Slide } from '@universa11y/transitions';

const Modal = (StyledModal: any) =>
  forwardRef(
    (
      {
        children,
        isOpen,
        onClose,
        defaultIsOpen,
        initialFocusRef,
        finalFocusRef,
        avoidKeyboard,
        closeOnOverlayClick = true,
        isKeyboardDismissable = true,
        animationPreset = 'fade',
        ...props
      }: any,
      ref: any
    ) => {
      const bottomInset = useKeyboardBottomInset();

      const { contentSize, useRNModal, ...remainingProps } = props;

      const [visible, setVisible] = useControllableState({
        value: defaultIsOpen ?? isOpen,
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
          avoidKeyboard,
          bottomInset,
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
          useRNModal={useRNModal}
          useRNModalOnAndroid
        >
          <ModalContext.Provider value={contextValue}>
            {animationPreset === 'slide' ? (
              <Slide in={visible}>
                <StyledModal {...props}>{children}</StyledModal>
              </Slide>
            ) : (
              <Fade
                in={visible}
                style={StyleSheet.absoluteFill}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 200 } }}
                exit={{ opacity: 0, transition: { duration: 100 } }}
              >
                <StyledModal {...remainingProps} ref={ref}>
                  {children}
                </StyledModal>
              </Fade>
            )}
          </ModalContext.Provider>
        </Overlay>
      );
    }
  );

export default Modal;
