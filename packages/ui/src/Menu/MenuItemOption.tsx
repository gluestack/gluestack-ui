import React, { forwardRef, memo, useContext } from 'react';

import MenuItem from './MenuItem';
// import type { IMenuOptionContextProps } from './types';
import { MenuOptionContext } from './MenuOptionGroup';
import { useMenuOptionItem } from './useMenu';
// import { CheckIcon } from '../Icon/Icons/Check';

const MenuItemOption = ({ value, ...props }: any, ref: any) => {
  const { values, onChange, type }: any = useContext(MenuOptionContext);
  const isChecked = values.includes(value);
  const menuOptionProps = useMenuOptionItem({ isChecked, type });
  const { children, onPress, ...resolvedProps } = props;

  const modifiedOnPress = (e: any) => {
    onChange(value);
    onPress && onPress(e);
  };

  return (
    <MenuItem
      {...resolvedProps}
      {...menuOptionProps}
      accessibilityRole="button"
      onPress={modifiedOnPress}
      ref={ref}
    >
      {/* <CheckIcon {..._icon} /> */}
      {children}
      {/* {React.Children.map(children, (child, index: any) => {
        if (typeof child === 'string' || typeof child === 'number') {
          return (
            <Text key={`menu-item-option-${index}`} {..._text}>
              {child}
            </Text>
          );
        } else {
          return child;
        }
      })} */}
    </MenuItem>
  );
};

export default memo(forwardRef(MenuItemOption));
