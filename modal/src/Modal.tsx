/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import { View } from 'react-native';
import {
  useControllableState,
  useKeyboardBottomInset,
} from '@gluestack-ui/hooks';
import { ModalContext } from './Context';
import { Overlay } from '@gluestack-ui/overlay';

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
        _experimentalOverlay = false,
        ...props
      }: any,
      ref?: any
    ) => {
      const bottomInset = useKeyboardBottomInset();

      const { useRNModal, ...remainingProps } = props;

      const [visible, setVisible] = useControllableState({
        value: defaultIsOpen ?? isOpen,
        onChange: (val) => {
          if (!val) onClose && onClose();
        },
      });

      const handleClose = React.useCallback(() => {
        setVisible(false);
      }, [setVisible]);

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
          initialFocusRef,
          finalFocusRef,
          closeOnOverlayClick,
          visible,
          avoidKeyboard,
          bottomInset,
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
          <ModalContext.Provider value={contextValue}>
            <StyledModal {...remainingProps} ref={ref}>
              {children}
              {avoidKeyboard ? avoidKeyboardSpacer : null}
            </StyledModal>
          </ModalContext.Provider>
        );
      }

      return (
        <Overlay
          isOpen={visible}
          onRequestClose={handleClose}
          isKeyboardDismissable={isKeyboardDismissable}
          useRNModal={useRNModal}
        >
          <ModalContext.Provider value={contextValue}>
            <StyledModal {...remainingProps} ref={ref}>
              {children}
              {avoidKeyboard ? avoidKeyboardSpacer : null}
            </StyledModal>
          </ModalContext.Provider>
        </Overlay>
      );
    }
  );

export default Modal;
