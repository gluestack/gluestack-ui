'use client';
import React from 'react';
import { createMenu } from '@gluestack-ui/core/menu/creator';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { Pressable, ScrollView, Text, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const AnimatedMenuRoot = React.forwardRef<
  React.ComponentRef<typeof AnimatedScrollView>,
  React.ComponentProps<typeof AnimatedScrollView> & { className?: string }
>(function AnimatedMenuRoot({ className, ...props }, ref) {
  return (
    <AnimatedScrollView
      showsVerticalScrollIndicator={false}
      ref={ref}
      entering={FadeIn.duration(150).springify().damping(60).stiffness(500)}
      exiting={FadeOut.duration(100)}
      className={className}
      {...props}
    />
  );
});

// AnimatePresence wrapper that accepts props (compatible with menu creator)
// Uses View instead of Fragment to support ref prop
const MenuAnimatePresence = React.forwardRef<
  React.ComponentRef<typeof View>,
  { children: React.ReactNode; [key: string]: any }
>(function MenuAnimatePresence({ children, ...props }, ref) {
  // Accept all props including ref
  // The menu creator passes various props, we just render children in a transparent wrapper
  return (
    <View ref={ref} {...props} pointerEvents="box-none">
      {children}
    </View>
  );
});

const menuStyle = tva({
  base: 'rounded-md bg-popover text-popover-foreground border border-border p-1 shadow-hard-5 max-h-[300px] overflow-y-auto',
});

const menuItemStyle = tva({
  base: 'min-w-fit p-3 flex-row items-center rounded data-[hover=true]:bg-accent data-[hover=true]:text-accent-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground data-[focus=true]:bg-accent data-[focus=true]:text-accent-foreground data-[focus=true]:web:outline-none data-[focus=true]:web:outline-0 data-[disabled=true]:opacity-40 data-[disabled=true]:web:cursor-not-allowed data-[focus-visible=true]:web:outline-2 data-[focus-visible=true]:web:outline-ring data-[focus-visible=true]:web:outline data-[focus-visible=true]:web:cursor-pointer data-[disabled=true]:data-[focus=true]:bg-transparent',
});

const menuBackdropStyle = tva({
  base: 'absolute top-0 bottom-0 left-0 right-0 web:cursor-default',
  // add this classnames if you want to give background color to backdrop
  // opacity-50 bg-background-500,
});

const menuSeparatorStyle = tva({
  base: 'bg-border h-px w-full',
});

const menuItemLabelStyle = tva({
  base: 'text-popover-foreground font-normal font-body',

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

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const BackdropPressable = React.forwardRef<
  React.ComponentRef<typeof Pressable>,
  React.ComponentPropsWithoutRef<typeof Pressable> &
    VariantProps<typeof menuBackdropStyle>
>(function BackdropPressable({ className, ...props }, ref) {
  return (
    <AnimatedPressable
      ref={ref}
      entering={FadeIn.duration(100)}
      exiting={FadeOut.duration(100)}
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
  Root: AnimatedMenuRoot,
  Item: Item,
  Label: Text,
  Backdrop: BackdropPressable,
  AnimatePresence: MenuAnimatePresence,
  Separator: Separator,
});

type IMenuProps = React.ComponentProps<typeof UIMenu> &
  VariantProps<typeof menuStyle> & { className?: string };
type IMenuItemLabelProps = React.ComponentProps<typeof UIMenu.ItemLabel> &
  VariantProps<typeof menuItemLabelStyle> & { className?: string };

const Menu = React.forwardRef<React.ComponentRef<typeof UIMenu>, IMenuProps>(
  function Menu({ className, ...props }, ref) {
    return (
      <UIMenu
        ref={ref}
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
        isTruncated: isTruncated as boolean,
        bold: bold as boolean,
        underline: underline as boolean,
        strikeThrough: strikeThrough as boolean,
        sub: sub as boolean,
        italic: italic as boolean,
        highlight: highlight as boolean,
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
