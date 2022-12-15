import React, { forwardRef } from 'react';
import { Fade } from '../Transitions';
import { ModalContext } from './Context';
import { StyleSheet } from 'react-native';

const ModalBackdrop = (StyledModalBackdrop: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    const { visible, closeOnOverlayClick, handleClose } =
      React.useContext(ModalContext);
    return (
      <Fade in={visible} style={StyleSheet.absoluteFill}>
        <StyledModalBackdrop
          ref={ref}
          onPress={() => {
            closeOnOverlayClick && handleClose();
          }}
          {...props}
        >
          {children}
        </StyledModalBackdrop>
      </Fade>
    );
  });

export default ModalBackdrop;
