import React, { forwardRef } from 'react';
import { Fade } from '../Transitions';
import { AlertDialogContext } from './Context';
import { StyleSheet } from 'react-native';

const AlertDialogBackdrop = (StyledAlertDialogBackdrop: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
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
  });

export default AlertDialogBackdrop;
