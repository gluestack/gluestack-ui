import React, { forwardRef } from 'react';
import { AlertDialogContext } from './Context';

function AlertDialogBackdrop<StyledAlertDialogBackdrop>(
  StyledAlertDialogBackdrop: React.ComponentType<StyledAlertDialogBackdrop>
) {
  return forwardRef(({ children, ...props }: { children?: any }, ref?: any) => {
    const { visible, closeOnOverlayClick, handleClose } =
      React.useContext(AlertDialogContext);
    return (
      <StyledAlertDialogBackdrop
        ref={ref}
        onPress={() => {
          closeOnOverlayClick && handleClose();
        }}
        {...(props as StyledAlertDialogBackdrop)}
      >
        {children}
      </StyledAlertDialogBackdrop>
    );
  });
}

export default AlertDialogBackdrop;
