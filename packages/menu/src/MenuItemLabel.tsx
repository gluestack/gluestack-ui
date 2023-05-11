import React, { forwardRef } from 'react';

export const MenuItemLabel = (StyledMenuItemLabel: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledMenuItemLabel {...props} ref={ref}>
        {children}
      </StyledMenuItemLabel>
    );
  });

export default MenuItemLabel;
