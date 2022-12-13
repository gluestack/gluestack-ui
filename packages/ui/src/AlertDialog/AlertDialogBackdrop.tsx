import React, { forwardRef } from 'react';
import { Fade } from '../Transitions';
import { UIContext } from '../UIProvider';
import { AlertDialogContext } from './Context';
import { StyleSheet } from 'react-native';

const ModalHeader = ({ children, ...props }: any, ref: any) => {
  const { StyledAlertDialogBackdrop } = React.useContext(UIContext);
  const { visible, closeOnOverlayClick, handleClose } =
    React.useContext(AlertDialogContext);
  return (
    <Fade in={visible} style={StyleSheet.absoluteFill}>
      <StyledAlertDialogBackdrop
        ref={ref}
        onPress={() => {
          closeOnOverlayClick && handleClose();
        }}
        {...props}
      >
        {children}
      </StyledAlertDialogBackdrop>
    </Fade>
  );
};

export default forwardRef(ModalHeader);
