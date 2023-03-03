import React, { forwardRef } from 'react';
import { ModalContext } from './Context';
import { StyleSheet } from 'react-native';
import { Fade, Slide } from '@gluestack-ui/transitions';

const ModalBackdrop = (StyledModalBackdrop: any) =>
  forwardRef(({ children, animationPreset, ...props }: any, ref: any) => {
    const { closeOnOverlayClick, handleClose, visible, modalAnimationPreset } =
      React.useContext(ModalContext);
    if (!animationPreset) {
      animationPreset = modalAnimationPreset;
    }
    return (
      <>
        {animationPreset === 'slide' ? (
          <Slide
            in={visible}
            placement="bottom"
            style={StyleSheet.absoluteFill}
          >
            <StyledModalBackdrop
              ref={ref}
              onPress={() => {
                closeOnOverlayClick && handleClose();
              }}
              {...props}
            >
              {children}
            </StyledModalBackdrop>
          </Slide>
        ) : (
          <Fade
            in={visible}
            style={StyleSheet.absoluteFill}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 200 } }}
            exit={{ opacity: 0, transition: { duration: 200 } }}
          >
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
        )}
      </>
    );
  });

export default ModalBackdrop;
