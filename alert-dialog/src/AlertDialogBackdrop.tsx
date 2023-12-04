import React, { forwardRef } from 'react';
import { AlertDialogContext } from './Context';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';

function AlertDialogBackdrop<StyledAlertDialogBackdrop>(
  StyledAlertDialogBackdrop: React.ComponentType<StyledAlertDialogBackdrop>,
  AnimatePresence?: any
) {
  return forwardRef(
    (
      { children, ...props }: StyledAlertDialogBackdrop & { children?: any },
      ref?: any
    ) => {
      const { visible, closeOnOverlayClick, handleClose } =
        React.useContext(AlertDialogContext);
      return (
        <OverlayAnimatePresence
          visible={visible}
          AnimatePresence={AnimatePresence}
        >
          <StyledAlertDialogBackdrop
            ref={ref}
            onPress={() => {
              closeOnOverlayClick && handleClose();
            }}
            {...(props as StyledAlertDialogBackdrop)}
          >
            {children}
          </StyledAlertDialogBackdrop>
        </OverlayAnimatePresence>
      );
    }
  );
}

export default AlertDialogBackdrop;
