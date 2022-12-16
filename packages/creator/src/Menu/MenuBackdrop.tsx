import React, { forwardRef } from 'react';

export const MenuBackdrop = (StyledMenuBackdrop: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledMenuBackdrop {...props} ref={ref}>
        {children}
      </StyledMenuBackdrop>
    );
  });

export default MenuBackdrop;
