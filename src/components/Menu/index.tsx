import { createMenu } from '@gluestack-ui/menu';
import { Root, Item, Label, Backdrop } from './styled-components';
import React, { forwardRef } from 'react';
import { usePropResolution } from '../../hooks/usePropResolution';
import { AnimatePresence } from '@gluestack-style/animation-resolver';
import { GenericComponentType } from '../../types';
// import { View, Pressable } from 'react-native';

export const AccessibleMenu = createMenu({
  Root,
  Item,
  Label,
  Backdrop,
  //@ts-ignore
  AnimatePresence: AnimatePresence,
});

const NewMenu = forwardRef(
  (
    {
      children,
      // isLoading,
      // isDisabled,
      // isLoadingText,
      colorScheme = 'primary',
      variant = 'solid',
      // onClose,
      trigger,
      ...props
    }: any,
    ref?: any
  ) => {
    const resolvedPropForGluestack = usePropResolution(props);

    return (
      <AccessibleMenu
        colorScheme={colorScheme}
        variant={variant}
        trigger={trigger}
        {...resolvedPropForGluestack}
        ref={ref}
      >
        {children}
      </AccessibleMenu>
    );
  }
);

const AccessibleMenuItemLabel = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    return (
      <AccessibleMenu.ItemLabel {...props} ref={ref}>
        {children}
      </AccessibleMenu.ItemLabel>
    );
  }
);

const MenuNew = NewMenu as any;
// MenuNew.Body = AccessibleMenuBody;
MenuNew.Item = AccessibleMenu.Item;
MenuNew.ItemLabel = AccessibleMenuItemLabel;

export type IMenuComponentType<Menu, Item, ItemLabel> =
  GenericComponentType<Menu> & {
    Item: GenericComponentType<Item>;
    ItemLabel: GenericComponentType<ItemLabel>;
  };

export const Menu = MenuNew as IMenuComponentType<
  typeof AccessibleMenu,
  typeof AccessibleMenu.Item,
  typeof AccessibleMenu.ItemLabel
>;

// export const MenuItem = Menu.Item;
// export const MenuItemLabel = Menu.ItemLabel;
