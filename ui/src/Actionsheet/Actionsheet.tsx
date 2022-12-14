import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';
import { Modal } from '../Modal';
import { Platform } from 'react-native';

const Actionsheet = (
  { children, isOpen, onClose, disableOverlay, ...props }: any,
  ref?: any
) =>
  // ref: any
  {
    // const bottomInset = useKeyboardBottomInset();
    const { StyledActionsheet } = React.useContext(UIContext);

    const overlayStyle = Platform.OS === 'web' ? { position: 'fixed' } : {};

    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        overlayVisible={disableOverlay ? false : true}
        closeOnOverlayClick={disableOverlay ? false : true}
        // sx={{

        // }}
        ref={ref}
        _overlay={{ style: overlayStyle }}
      >
        <StyledActionsheet {...props}>{children}</StyledActionsheet>
      </Modal>
    );
  };

export default forwardRef(Actionsheet);
