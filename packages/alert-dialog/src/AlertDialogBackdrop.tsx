import React, { forwardRef } from 'react';
import { Fade } from '@universa11y/transitions';
import { AlertDialogContext } from './Context';
import { StyleSheet } from 'react-native';

function AlertDialogBackdrop<StyledAlertDialogBackdrop>(
  StyledAlertDialogBackdrop: React.ComponentType<StyledAlertDialogBackdrop>
) {
  return forwardRef(
    (
      { children, ...props }: StyledAlertDialogBackdrop & { children?: any },
      ref: any
    ) => {
      const { visible, closeOnOverlayClick, handleClose } =
        React.useContext(AlertDialogContext);
      return (
        <Fade in={visible} style={StyleSheet.absoluteFill}>
          <StyledAlertDialogBackdrop
            ref={ref}
            onPress={() => {
              closeOnOverlayClick && handleClose();
            }}
            {...(props as StyledAlertDialogBackdrop)}
          >
            {children}
          </StyledAlertDialogBackdrop>
        </Fade>
      );
    }
  );
}

export default AlertDialogBackdrop;
