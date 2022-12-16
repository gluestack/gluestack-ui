import React, { forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import { useControllableState } from '../hooks';
import { ModalContext } from './Context';
import { Overlay } from '../Overlay';
import { Fade, Slide } from '../Transitions';

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
        contentSize,
        closeOnOverlayClick = true,
        isKeyboardDismissable = true,
        animationPreset = 'slide',
        ...props
      }: any,
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
          useRNModalOnAndroid
        >
          <ModalContext.Provider value={contextValue}>
            {animationPreset === 'slide' ? (
              <Slide in={visible}>
                <StyledModal {...props}>{children}</StyledModal>
              </Slide>
            ) : (
              <Fade in={visible} style={StyleSheet.absoluteFill}>
                <StyledModal {...props} ref={ref}>
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
