import React, { forwardRef, memo } from 'react';
import { MenuItemOptionProvider } from './MenuItemOptionContext';

const MenuItemOption = (StyledMenuItemOption: any) =>
  memo(
    forwardRef(({ value, ...props }: any, ref?: any) => {
      const { children, ...rest } = props;

      return (
        <MenuItemOptionProvider value={value}>
          <StyledMenuItemOption {...rest} ref={ref}>
            {children}
          </StyledMenuItemOption>
        </MenuItemOptionProvider>
      );
    })
  );

export default MenuItemOption;
