import React, { forwardRef } from 'react';
import { Modal } from '../Modal';
import { Platform } from 'react-native';

const Actionsheet = (StyledActionsheet: any) =>
  forwardRef(
    (
      { children, isOpen, onClose, disableOverlay, ...props }: any,
      ref?: any
    ) => {
      const overlayStyle = Platform.OS === 'web' ? { position: 'fixed' } : {};

      return (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          overlayVisible={disableOverlay ? false : true}
          closeOnOverlayClick={disableOverlay ? false : true}
          ref={ref}
          _overlay={{ style: overlayStyle }}
        >
          <StyledActionsheet {...props}>{children}</StyledActionsheet>
        </Modal>
      );
    }
  );
export default Actionsheet;
