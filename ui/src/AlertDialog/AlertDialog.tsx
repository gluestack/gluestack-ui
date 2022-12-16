import React, { forwardRef } from 'react';
import { StyleSheet } from 'react-native';
// import { StyleSheet } from 'react-native';
// import { Slide } from '../Transitions';
import { useControllableState } from '../hooks';
import { AlertDialogContext } from './Context';
// import { Fade } from '../../composites/Transitions';
import { Overlay } from '../Overlay';
import { Fade, Slide } from '../Transitions';
import { UIContext } from '../UIProvider';

const Modal = ({
  children,
  isOpen,
  onClose,
  defaultIsOpen,
  initialFocusRef,
  finalFocusRef,
  // avoidKeyboard,
  contentSize,
  closeOnOverlayClick = true,
  isKeyboardDismissable = true,
  // overlayVisible = true,
  // backdropVisible = true,
  animationPreset,
}: // ...rest
any) =>
  // ref: any
  {
    // const bottomInset = useKeyboardBottomInset();
    const { StyledAlertDialog } = React.useContext(UIContext);

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
        w:md="hello"
        isOpen={visible}
        onRequestClose={handleClose}
        isKeyboardDismissable={isKeyboardDismissable}
        animationPreset={animationPreset}
        useRNModalOnAndroid
        // useRNModal={useRNModal}
      >
        <AlertDialogContext.Provider value={contextValue}>
          {animationPreset === 'slide' ? (
            <Slide in={visible}>
              <StyledAlertDialog>{children}</StyledAlertDialog>
            </Slide>
          ) : (
            <Fade in={visible} style={StyleSheet.absoluteFill}>
              <StyledAlertDialog>{children}</StyledAlertDialog>
            </Fade>
          )}
        </AlertDialogContext.Provider>
      </Overlay>
    );
  };

export default forwardRef(Modal);
