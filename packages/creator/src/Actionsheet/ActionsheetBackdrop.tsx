import React, { forwardRef } from 'react';
import { ActionsheetContext } from './context';

const ActionsheetBackdrop = (StyledActionsheetBackdrop: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    const { closeOnOverlayClick, handleClose } =
      React.useContext(ActionsheetContext);
    return (
      <StyledActionsheetBackdrop
        ref={ref}
        onPress={() => {
          closeOnOverlayClick && handleClose();
        }}
        {...props}
      >
        {children}
      </StyledActionsheetBackdrop>
    );
  });

export default ActionsheetBackdrop;
