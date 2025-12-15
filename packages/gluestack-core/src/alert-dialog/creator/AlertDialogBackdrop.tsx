import React, { forwardRef } from 'react';
import { AlertDialogContext } from './Context';

function AlertDialogBackdrop<StyledAlertDialogBackdrop>(
  StyledAlertDialogBackdrop: React.ComponentType<StyledAlertDialogBackdrop>,
  AnimatePresence?: any
) {
  return forwardRef(({ children, ...props }: { children?: any }, ref?: any) => {
    const { visible, closeOnOverlayClick, handleClose } =
      React.useContext(AlertDialogContext);

    // Render backdrop only when visible (AnimatePresence at root level handles this)
    if (!visible) return null;

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
