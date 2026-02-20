import React, { forwardRef } from 'react';
import { Platform } from 'react-native';
import { useControllableState } from '@gluestack-ui/utils/hooks';
import { Overlay } from '../../overlay/creator';
import { BottomSheetContext } from './context';
import { StyleSheet } from 'react-native';
import type { IBottomSheetProps } from './types';

export function BottomSheet<T>(StyledBottomSheet: React.ComponentType<T>) {
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
        snapPoints = [50],
        snapToIndex = 0,
        preventScroll = true,
        // @ts-ignore
        _experimentalOverlay = false,
        ...props
      }: IBottomSheetProps,
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

      const handleOpen = React.useCallback(() => {
        setVisible(true);
      }, [setVisible]);

      const handleCloseBackdrop = React.useCallback(() => {
        setBackdropVisible(false);
      }, [setBackdropVisible]);

      const contextValue: any = React.useMemo(() => {
        return {
          handleClose,
          handleOpen,
          closeOnOverlayClick,
          visible,
          backdropVisible,
          handleCloseBackdrop,
          trapFocus,
          initialFocusRef,
          finalFocusRef,
          snapPoints,
          snapToIndex,
          preventScroll,
        };
      }, [
        handleClose,
        handleOpen,
        handleCloseBackdrop,
        closeOnOverlayClick,
        visible,
        backdropVisible,
        trapFocus,
        initialFocusRef,
        finalFocusRef,
        snapPoints,
        snapToIndex,
        preventScroll,
      ]);

      return (
        <Overlay
          isOpen={visible}
          onRequestClose={handleClose}
          isKeyboardDismissable={isKeyboardDismissable}
          useRNModal={useRNModal}
          // @ts-ignore
          style={overlayStyle}
        >
          <BottomSheetContext.Provider value={contextValue}>
            <StyledBottomSheet
              ref={ref}
              style={[StyleSheet.absoluteFill]}
              {...(props as T)}
            >
              {children}
            </StyledBottomSheet>
          </BottomSheetContext.Provider>
        </Overlay>
      );
    }
  );
}
