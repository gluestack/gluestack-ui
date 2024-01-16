import React, { forwardRef } from 'react';
import { Platform } from 'react-native';
import { useControllableState } from '@gluestack-ui/hooks';
import { Overlay } from '@gluestack-ui/overlay';
import { ActionsheetContext } from './context';
import { StyleSheet } from 'react-native';

export function Actionsheet(StyledActionsheet: any) {
  return forwardRef(
    (
      {
        children,
        isOpen,
        onClose,
        onOpen,
        defaultIsOpen = false,
        trapFocus = true,
        closeOnOverlayClick = true,
        isKeyboardDismissable = true,
        useRNModal,
        initialFocusRef,
        finalFocusRef,
        snapPoints,
        // @ts-ignore
        _experimentalOverlay = false,
        ...props
      }: any,
      ref?: any
    ) => {
      const overlayStyle = Platform.OS === 'web' ? { position: 'fixed' } : {};

      const [visible, setVisible] = useControllableState({
        value: isOpen,
        defaultValue: defaultIsOpen,
        onChange: (val) => {
          if (val === false) {
            onClose && onClose();
          } else {
            onOpen && onOpen();
          }
        },
      });
      const [backdropVisible, setBackdropVisible] = useControllableState({
        value: isOpen,
        defaultValue: defaultIsOpen,
      });
      const handleClose = React.useCallback(() => {
        setVisible(false);
      }, [setVisible]);

      const handleCloseBackdrop = React.useCallback(() => {
        setBackdropVisible(false);
      }, [setBackdropVisible]);

      const contextValue: any = React.useMemo(() => {
        return {
          handleClose,
          closeOnOverlayClick,
          visible,
          backdropVisible: backdropVisible,
          handleCloseBackdrop,
          trapFocus,
          initialFocusRef,
          finalFocusRef,
          snapPoints,
        };
      }, [
        handleClose,
        handleCloseBackdrop,
        closeOnOverlayClick,
        visible,
        backdropVisible,
        trapFocus,
        initialFocusRef,
        finalFocusRef,
        snapPoints,
      ]);

      const pointerEvents = Platform.OS === 'web' ? 'none' : undefined;
      return (
        <Overlay
          isOpen={visible}
          onRequestClose={handleClose}
          isKeyboardDismissable={isKeyboardDismissable}
          useRNModal={useRNModal}
          // @ts-ignore
          style={overlayStyle}
        >
          <ActionsheetContext.Provider value={contextValue}>
            <StyledActionsheet
              ref={ref}
              style={[
                StyleSheet.absoluteFill,
                { pointerEvents },
                { ...props.style },
              ]}
              {...props}
            >
              {children}
            </StyledActionsheet>
          </ActionsheetContext.Provider>
        </Overlay>
      );
    }
  );
}
