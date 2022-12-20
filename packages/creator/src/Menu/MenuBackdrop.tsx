import React, { forwardRef } from 'react';
import { usePopperContext } from '../Popper/PopperContext';

export const MenuBackdrop = (StyledMenuBackdrop: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    const { value } = usePopperContext('PopperContext');
    const { handleClose } = value;
    return (
      <StyledMenuBackdrop {...props} ref={ref} onPress={handleClose}>
        {children}
      </StyledMenuBackdrop>
    );
  });

export default MenuBackdrop;
