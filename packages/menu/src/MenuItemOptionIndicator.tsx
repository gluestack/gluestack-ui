import React, { forwardRef } from 'react';
import { useMenuOptionItem } from './useMenu';
import { useMenuOptions } from './MenuOptionsContext';
import { useMenuItemOption } from './MenuItemOptionContext';

const MenuItemOptionIndicator = (StyledMenuItemOptionIndicator: any) =>
  forwardRef(({ children, onPress, ...props }: any, ref?: any) => {
    const { values, onChange, isDisabled, type }: any =
      useMenuOptions('MenuOptionsContext');
    const { value }: any = useMenuItemOption('MenuItemOptionContext');

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
  });

export default MenuItemOptionIndicator;
