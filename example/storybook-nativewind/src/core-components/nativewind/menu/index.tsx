'use client';
import React from 'react';
import { createMenu } from '@gluestack-ui/menu';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { cssInterop } from 'nativewind';
import { Pressable, Text, View, ViewStyle } from 'react-native';
import {
  Motion,
  AnimatePresence,
  MotionComponentProps,
} from '@legendapp/motion';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

type IMotionViewProps = React.ComponentProps<typeof View> &
  MotionComponentProps<typeof View, ViewStyle, unknown, unknown, unknown>;

const MotionView = Motion.View as React.ComponentType<IMotionViewProps>;

const menuStyle = tva({
  base: 'rounded-md bg-background-0 border border-outline-100 p-1 shadow-hard-5',
});

const menuItemStyle = tva({
  base: 'min-w-[200px] p-3 flex-row items-center rounded data-[hover=true]:bg-background-50 data-[active=true]:bg-background-100 data-[focus=true]:bg-background-50 data-[focus=true]:web:outline-none data-[focus=true]:web:outline-0 data-[disabled=true]:opacity-40 data-[disabled=true]:web:cursor-not-allowed data-[focus-visible=true]:web:outline-2 data-[focus-visible=true]:web:outline-primary-700 data-[focus-visible=true]:web:outline data-[focus-visible=true]:web:cursor-pointer data-[disabled=true]:data-[focus=true]:bg-transparent',
});

const menuBackdropStyle = tva({
  base: 'absolute top-0 bottom-0 left-0 right-0 web:cursor-default',
  // add this classnames if you want to give background color to backdrop
  // opacity-50 bg-background-500,
});

const menuSeparatorStyle = tva({
  base: 'bg-background-200 h-px w-full',
});

const menuItemLabelStyle = tva({
  base: 'text-typography-700 font-normal font-body',

  variants: {
    isTruncated: {
      true: 'web:truncate',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    size: {
      '2xs': 'text-2xs',
      'xs': 'text-xs',
      'sm': 'text-sm',
      'md': 'text-base',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
    sub: {
      true: 'text-xs',
    },
    italic: {
      true: 'italic',
    },
    highlight: {
      true: 'bg-yellow-500',
    },
  },
});

const BackdropPressable = React.forwardRef<
  React.ComponentRef<typeof Pressable>,
  React.ComponentPropsWithoutRef<typeof Pressable> &
    VariantProps<typeof menuBackdropStyle>
>(function BackdropPressable({ className, ...props }, ref) {
  return (
    <Pressable
      ref={ref}
      className={menuBackdropStyle({
        class: className,
      })}
      {...props}
    />
  );
});

type IMenuItemProps = VariantProps<typeof menuItemStyle> & {
  className?: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Item = React.forwardRef<
  React.ComponentRef<typeof Pressable>,
  IMenuItemProps
>(function Item({ className, ...props }, ref) {
  return (
    <Pressable
      ref={ref}
      className={menuItemStyle({
        class: className,
      })}
      {...props}
    />
  );
});

const Separator = React.forwardRef<
  React.ComponentRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View> &
    VariantProps<typeof menuSeparatorStyle>
>(function Separator({ className, ...props }, ref) {
  return (
    <View
      ref={ref}
      className={menuSeparatorStyle({ class: className })}
      {...props}
    />
  );
});
export const UIMenu = createMenu({
  Root: MotionView,
  Item: Item,
  Label: Text,
  Backdrop: BackdropPressable,
  AnimatePresence: AnimatePresence,
  Separator: Separator,
});

cssInterop(MotionView, { className: 'style' });

type IMenuProps = React.ComponentProps<typeof UIMenu> &
  VariantProps<typeof menuStyle> & { className?: string };
type IMenuItemLabelProps = React.ComponentProps<typeof UIMenu.ItemLabel> &
  VariantProps<typeof menuItemLabelStyle> & { className?: string };

const Menu = React.forwardRef<React.ComponentRef<typeof UIMenu>, IMenuProps>(
  function Menu({ className, ...props }, ref) {
    return (
      <UIMenu
        ref={ref}
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.8,
        }}
        transition={{
          type: 'timing',
          duration: 100,
        }}
        className={menuStyle({
          class: className,
        })}
        {...props}
      />
    );
  }
);

const MenuItem = UIMenu.Item;

const MenuItemLabel = React.forwardRef<
  React.ComponentRef<typeof UIMenu.ItemLabel>,
  IMenuItemLabelProps
>(function MenuItemLabel(
  {
    className,
    isTruncated,
    bold,
    underline,
    strikeThrough,
    size = 'md',
    sub,
    italic,
    highlight,
    ...props
  },
  ref
) {
  return (
    <UIMenu.ItemLabel
      ref={ref}
      className={menuItemLabelStyle({
        isTruncated,
        bold,
        underline,
        strikeThrough,
        size,
        sub,
        italic,
        highlight,
        class: className,
      })}
      {...props}
    />
  );
});

const MenuSeparator = UIMenu.Separator;

Menu.displayName = 'Menu';
MenuItem.displayName = 'MenuItem';
MenuItemLabel.displayName = 'MenuItemLabel';
MenuSeparator.displayName = 'MenuSeparator';
export { Menu, MenuItem, MenuItemLabel, MenuSeparator };
