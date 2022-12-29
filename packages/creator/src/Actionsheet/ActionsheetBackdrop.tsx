import React, { forwardRef } from 'react';
import { ActionsheetContext } from './context';

function ActionsheetBackdrop<T>(
  StyledActionsheetBackdrop: React.ComponentType<T>
) {
  return forwardRef(({ children, ...props }: any, ref: any) => {
    const { closeOnOverlayClick, handleClose } =
      React.useContext(ActionsheetContext);
    return (
      <StyledActionsheetBackdrop
        ref={ref}
        onPress={() => {
          closeOnOverlayClick && handleClose();
        }}
        {...(props as T)}
      >
        {children}
      </StyledActionsheetBackdrop>
    );
  });
}

export default ActionsheetBackdrop;
