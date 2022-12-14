import React, { forwardRef, memo } from 'react';
import { UIContext } from '../UIProvider';
import { MenuItemOptionProvider } from './MenuItemOptionContext';

const MenuItemOption = ({ value, ...props }: any, ref: any) => {
  const { children, ...rest } = props;
  const { StyledMenuItemOption } = React.useContext(UIContext);

  return (
    <MenuItemOptionProvider value={value}>
      <StyledMenuItemOption {...rest} ref={ref}>
        {children}
      </StyledMenuItemOption>
    </MenuItemOptionProvider>
  );
};

export default memo(forwardRef(MenuItemOption));
