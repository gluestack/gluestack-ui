import React, { forwardRef } from 'react';
import { ModalContext } from './Context';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';

const ModalBackdrop = (StyledModalBackdrop: any, AnimatePresence?: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { closeOnOverlayClick, handleClose, visible } =
      React.useContext(ModalContext);
    return (
      <OverlayAnimatePresence
        visible={visible}
        AnimatePresence={AnimatePresence}
      >
        <StyledModalBackdrop
          ref={ref}
          exit={true}
          onPress={() => {
            closeOnOverlayClick && handleClose();
          }}
          {...props}
        >
          {children}
        </StyledModalBackdrop>
      </OverlayAnimatePresence>
    );
  });

export default ModalBackdrop;
