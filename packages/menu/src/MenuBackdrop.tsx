import React, { forwardRef } from 'react';
import { useMenuContext } from './context';

export const MenuBackdrop = (StyledMenuBackdrop: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { value } = useMenuContext('MenuContext');
    const { handleClose, closeOnOverlayClick } = value;
    return (
      <StyledMenuBackdrop
        {...props}
        ref={ref}
        onPress={closeOnOverlayClick && handleClose}
      >
        {children}
      </StyledMenuBackdrop>
    );
  });

MenuBackdrop.displayName = 'MenuBackdrop';

export default MenuBackdrop;
