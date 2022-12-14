import React, { forwardRef } from 'react';
import { Fade } from '../Transitions';
import { UIContext } from '../UIProvider';
import { MenuContext } from './context';
import { StyleSheet } from 'react-native';

const MenuBackdrop = ({ children, ...props }: any, ref: any) => {
  const { StyledMenuBackdrop } = React.useContext(UIContext);
  const { isOpen, handleClose } = React.useContext(MenuContext);

  return (
    <Fade in={isOpen} style={StyleSheet.absoluteFill}>
      <StyledMenuBackdrop
        ref={ref}
        onPress={() => {
          handleClose();
        }}
        {...props}
      >
        {children}
      </StyledMenuBackdrop>
    </Fade>
  );
};

export default forwardRef(MenuBackdrop);
