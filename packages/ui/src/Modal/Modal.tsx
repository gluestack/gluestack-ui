import React, { forwardRef } from 'react';
import { StyleSheet } from 'react-native';
// import { StyleSheet } from 'react-native';
// import { Slide } from '../Transitions';
import { useControllableState } from '../hooks';
import { ModalContext } from './Context';
// import { Fade } from '../../composites/Transitions';
import { Overlay } from './../Overlay';
import { Fade, Slide } from '../Transitions';

const Modal = ({
  children,
  isOpen,
  onClose,
  defaultIsOpen,
  initialFocusRef,
  finalFocusRef,
  // avoidKeyboard,
  contentSize,
  // closeOnOverlayClick = true,
  isKeyboardDismissable = true,
  // overlayVisible = true,
  // backdropVisible = true,
  animationPreset,
}: // ...rest
any) =>
  // ref: any
  {
    // const bottomInset = useKeyboardBottomInset();

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

    // const child = (
    //   <Box
    //     bottom={avoidKeyboard ? bottomInset + 'px' : undefined}
    //     {...resolvedProps}
    //     ref={ref}
    //     pointerEvents="box-none"
    //   >
    //     {children}
    //   </Box>
    // );

    const contextValue = React.useMemo(() => {
      return {
        handleClose,
        contentSize,
        initialFocusRef,
        finalFocusRef,
        visible,
      };
    }, [handleClose, contentSize, initialFocusRef, finalFocusRef, visible]);

    return (
      <Overlay
        isOpen={visible}
        onRequestClose={handleClose}
        isKeyboardDismissable={isKeyboardDismissable}
        animationPreset={animationPreset}
        useRNModalOnAndroid
        // useRNModal={useRNModal}
        // {..._overlay}
      >
        <ModalContext.Provider value={contextValue}>
          {animationPreset === 'slide' ? (
            <Slide in={visible}>{children}</Slide>
          ) : (
            <Fade in={visible} style={StyleSheet.absoluteFill}>
              {children}
            </Fade>
          )}
        </ModalContext.Provider>
      </Overlay>
    );
  };

export default forwardRef(Modal);
