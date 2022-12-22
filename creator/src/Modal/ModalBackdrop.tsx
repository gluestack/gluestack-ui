import React, { forwardRef } from 'react';
import { ModalContext } from './Context';

const ModalBackdrop = (StyledModalBackdrop: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    const { closeOnOverlayClick, handleClose } = React.useContext(ModalContext);
    return (
      <StyledModalBackdrop
        ref={ref}
        onPress={() => {
          closeOnOverlayClick && handleClose();
        }}
        {...props}
      >
        {children}
      </StyledModalBackdrop>
    );
  });

export default ModalBackdrop;
