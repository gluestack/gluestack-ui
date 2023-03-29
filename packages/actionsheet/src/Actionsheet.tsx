import React, { forwardRef } from 'react';
import { Dimensions, Platform } from 'react-native';
import {
  useControllableState,
  // useKeyboardBottomInset,
} from '@gluestack-ui/hooks';
import { Overlay } from '@gluestack-ui/overlay';
import { Fade, Slide } from '@gluestack-ui/transitions';
import { ActionsheetContext } from './context';
import { StyleSheet } from 'react-native';
import type { IActionsheetProps } from './types';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';

export function Actionsheet<T>(
  StyledActionsheet: React.ComponentType<T>,
  AnimatePresence: any
) {
  return forwardRef(
    (
      {
        children,
        isOpen,
        onClose,
        defaultIsOpen = false,
        avoidKeyboard,
        closeOnOverlayClick = true,
        isKeyboardDismissable = true,
        animationPreset,
        useRNModal,
        ...props
      }: T & IActionsheetProps,
      ref?: any
    ) => {
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

      const heigthsss = Dimensions.get('window').height;

      const [size, setSize] = React.useState(heigthsss);

      const contextValue: any = React.useMemo(() => {
        return {
          handleClose,
          closeOnOverlayClick,
          visible,
          avoidKeyboard,
          size,
          setSize,
          // contentSize,
          // bottomInset,
        };
      }, [
        handleClose,
        closeOnOverlayClick,
        visible,
        avoidKeyboard,
        size,
        setSize,
        // contentSize,
        // bottomInset,
      ]);

      // const avoidKeyboardSpacer = (
      //   <View
      //     style={{
      //       pointerEvents: 'box-none',
      //       width: '100%',
      //       height: avoidKeyboard ? bottomInset : undefined,
      //     }}
      //   />
      // );

      return (
        <Overlay
          isOpen={visible}
          onRequestClose={handleClose}
          isKeyboardDismissable={isKeyboardDismissable}
          // animationPreset={animationPreset}
          // useRNModal={useRNModal}
          unmountOnExit
          // @ts-ignore
          style={overlayStyle}
        >
          {/* <OverlayAnimatePresence
            in={visible}
            AnimatePresence={AnimatePresence}
            size={size}
            updateSize={setSize}
            // style={StyleSheet.absoluteFill}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1, transition: { duration: 200 } }}
            // exit={{ opacity: 0, transition: { duration: 100 } }}
          > */}
          <ActionsheetContext.Provider value={contextValue}>
            <StyledActionsheet ref={ref} {...(props as T)}>
              {children}
              {/* {avoidKeyboard ? avoidKeyboardSpacer : null} */}
            </StyledActionsheet>
          </ActionsheetContext.Provider>
          {/* </OverlayAnimatePresence> */}
        </Overlay>
      );
    }
  );
}
