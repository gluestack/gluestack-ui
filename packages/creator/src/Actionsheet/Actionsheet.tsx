import React, { forwardRef } from 'react';
import { Platform } from 'react-native';
import { useControllableState } from '../hooks/useControllableState';
import { Overlay } from '../Overlay';
import { Slide } from '../Transitions';
import { ActionsheetContext } from './context';

export const Actionsheet = (StyledActionsheet: any) =>
  forwardRef(
    (
      {
        children,
        isOpen,
        onClose,
        _disableOverlay,
        defaultIsOpen,
        initialFocusRef,
        finalFocusRef,
        hideDragIndicator,
        // avoidKeyboard,
        contentSize,
        closeOnOverlayClick = true,
        isKeyboardDismissable = true,
        // overlayVisible = true,
        // backdropVisible = true,
        animationPreset,
        ...props
      }: any,
      ref?: any
    ) =>
      // ref: any
      {
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

        const contextValue = React.useMemo(() => {
          return {
            handleClose,
            contentSize,
            initialFocusRef,
            finalFocusRef,
            closeOnOverlayClick,
            visible,
            hideDragIndicator,
          };
        }, [
          handleClose,
          contentSize,
          initialFocusRef,
          closeOnOverlayClick,
          finalFocusRef,
          visible,
          hideDragIndicator,
        ]);

        return (
          <Overlay
            isOpen={visible}
            onRequestClose={handleClose}
            isKeyboardDismissable={isKeyboardDismissable}
            animationPreset={animationPreset}
            useRNModalOnAndroid
            //@ts-ignore
            _overlay={{ style: { ...overlayStyle } }}
          >
            {/* <Slide in={visible}> */}
            <ActionsheetContext.Provider value={contextValue}>
              <StyledActionsheet ref={ref} {...props}>
                {children}
              </StyledActionsheet>
            </ActionsheetContext.Provider>
            {/* </Slide> */}
          </Overlay>
        );
      }
  );
