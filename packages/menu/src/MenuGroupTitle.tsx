import React, { forwardRef } from 'react';

export const MenuGroupTitle = (StyledMenuGroupTitle: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return <StyledMenuGroupTitle {...props}>{children}</StyledMenuGroupTitle>;
  });

export default MenuGroupTitle;
