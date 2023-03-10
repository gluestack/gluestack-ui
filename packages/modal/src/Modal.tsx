/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  useControllableState,
  useKeyboardBottomInset,
} from '@gluestack-ui/hooks';
import { ModalContext } from './Context';
import { Overlay } from '@gluestack-ui/overlay';
import { Fade, Slide } from '@gluestack-ui/transitions';

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
        slideAnimationPosition = 'bottom',
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
          // useRNModalOnAndroid
        >
          <ModalContext.Provider value={contextValue}>
            {animationPreset === 'slide' ? (
              <Slide in={visible} placement={slideAnimationPosition}>
                <StyledModal {...props}>
                  {children}
                  {avoidKeyboard ? avoidKeyboardSpacer : null}
                </StyledModal>
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
                  {avoidKeyboard ? avoidKeyboardSpacer : null}
                </StyledModal>
              </Fade>
            )}
          </ModalContext.Provider>
        </Overlay>
      );
    }
  );

export default Modal;
