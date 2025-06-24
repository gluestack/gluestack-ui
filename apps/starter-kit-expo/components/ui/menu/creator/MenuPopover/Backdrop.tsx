import React, { forwardRef, useContext } from 'react';
import { MenuContext } from '../MenuContext';

export const MenuBackdrop = forwardRef(
  ({ children, StyledBackdrop, ...props }: any, ref: any) => {
    const { onClose } = useContext(MenuContext);

    return (
      <StyledBackdrop
        {...props}
        ref={ref}
        onPress={onClose}
        style={{
          backgroundColor: 'red',
        }}
      >
        {children}
      </StyledBackdrop>
    );
  }
);

MenuBackdrop.displayName = 'MenuBackdrop';

export default MenuBackdrop;
