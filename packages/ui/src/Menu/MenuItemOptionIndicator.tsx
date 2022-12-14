import React, { forwardRef } from 'react';
import { useMenuOptionItem } from './useMenu';
import { UIContext } from '../UIProvider';
import { useMenuOptions } from './MenuOptionsContext';
import { useMenuItemOption } from './MenuItemOptionContext';

const MenuItemOptionIndicator = (
  { children, onPress, ...props }: any,
  ref: any
) => {
  const { values, onChange, isDisabled, type }: any =
    useMenuOptions('MenuOptionsContext');
  const { value }: any = useMenuItemOption('MenuItemOptionContext');
  const { StyledMenuItemOptionIndicator } = React.useContext(UIContext);

  const isChecked = values.includes(value);

  const modifiedOnPress = (e: any) => {
    onChange(value);
    onPress && onPress(e);
  };

  const menuOptionProps = useMenuOptionItem({ isChecked, type });

  return (
    <StyledMenuItemOptionIndicator
      {...props}
      {...menuOptionProps}
      onPress={modifiedOnPress}
      ref={ref}
      disabled={isDisabled}
      accessibilityState={{
        disabled: isDisabled,
      }}
    >
      {children}
    </StyledMenuItemOptionIndicator>
  );
};

export default forwardRef(MenuItemOptionIndicator);
