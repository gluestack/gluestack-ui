import React, { forwardRef } from 'react';

export const MenuItemLabel = (StyledMenuItemLabel: any) =>
  forwardRef(({ children, ...props }: any) => {
    return <StyledMenuItemLabel {...props}>{children}</StyledMenuItemLabel>;
  });

export default MenuItemLabel;
