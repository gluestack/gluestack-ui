import React, { forwardRef } from 'react';

const MenuBackdrop = ({ StyledMenuBackdrop }: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledMenuBackdrop ref={ref} {...props}>
        {children}
      </StyledMenuBackdrop>
    );
  });

export default MenuBackdrop;
