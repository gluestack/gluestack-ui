import React, { memo, forwardRef } from 'react';

const MenuGroup = (StyledMenuGroup: any) =>
  memo(
    forwardRef(({ children, ...props }: any, ref?: any) => {
      return (
        <StyledMenuGroup {...props} ref={ref}>
          {children}
        </StyledMenuGroup>
      );
    })
  );

export default MenuGroup;
