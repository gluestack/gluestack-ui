'use client';
import { createModal as createDrawer } from '@gluestack-ui/core-v4-experimental/modal/creator';
import React from 'react';
import { Dimensions, Pressable, ScrollView, View } from 'react-native';

import type { VariantProps } from '@gluestack-ui/utils-v4-experimental/nativewind-utils';
import {
  tva,
  useStyleContext,
  withStyleContext,
} from '@gluestack-ui/utils-v4-experimental/nativewind-utils';
import { cssInterop } from 'nativewind';
import Animated, {
  FadeIn,
  FadeOut,
  SlideInLeft,
  SlideOutLeft,
} from 'react-native-reanimated';

const SCOPE = 'MODAL';
const AnimatedView = Animated.createAnimatedComponent(View);
const AnimatedBackdrop = Animated.createAnimatedComponent(Pressable);

const UIDrawer = createDrawer({
  Root: withStyleContext(View, SCOPE),
  Backdrop: AnimatedBackdrop,
  Content: AnimatedView,
  Body: ScrollView,
  CloseButton: Pressable,
  Footer: View,
  Header: View,
});

cssInterop(AnimatedView, { className: 'style' });
cssInterop(AnimatedBackdrop, { className: 'style' });
const drawerStyle = tva({
  base: 'w-full h-full web:pointer-events-none relative',
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
      full: '',
    },
    anchor: {
      left: 'items-start',
      right: 'items-end',
      top: 'justify-start',
      bottom: 'justify-end',
    },
  },
});

const drawerBackdropStyle = tva({
  base: 'absolute left-0 top-0 right-0 bottom-0 bg-black/50 web:cursor-default web:pointer-events-auto',
});

const drawerContentStyle = tva({
  base: 'bg-background overflow-scroll shadow-md p-6 absolute web:pointer-events-auto',
  parentVariants: {
    size: {
      sm: 'w-2/5 sm:w-1/4',
      md: 'w-1/2',
      lg: 'w-3/4',
      full: 'w-full',
    },
    anchor: {
      left: 'h-full border-r border-border dark:border-border/10',
      right: 'h-full border-l border-border dark:border-border/10',
      top: 'w-full border-b border-border dark:border-border/10 rounded-b-xl',
      bottom:
        'w-full border-t border-border dark:border-border/10 rounded-t-xl',
    },
  },
  parentCompoundVariants: [
    {
      anchor: 'top',
      size: 'sm',
      class: 'h-1/4',
    },
    {
      anchor: 'top',
      size: 'md',
      class: 'h-1/2',
    },
    {
      anchor: 'top',
      size: 'lg',
      class: 'h-3/4',
    },
    {
      anchor: 'top',
      size: 'full',
      class: 'h-full',
    },
    {
      anchor: 'bottom',
      size: 'sm',
      class: 'h-1/4',
    },
    {
      anchor: 'bottom',
      size: 'md',
      class: 'h-1/2',
    },
    {
      anchor: 'bottom',
      size: 'lg',
      class: 'h-3/4',
    },
    {
      anchor: 'bottom',
      size: 'full',
      class: 'h-full',
    },
  ],
});

const drawerCloseButtonStyle = tva({
  base: 'z-10 rounded-sm p-2 data-[focus-visible=true]:bg-accent web:cursor-pointer web:outline-0 data-[hover=true]:bg-accent/50',
});

const drawerHeaderStyle = tva({
  base: 'justify-between items-center flex-row pb-4',
});

const drawerBodyStyle = tva({
  base: 'flex-1',
});

const drawerFooterStyle = tva({
  base: 'flex-col-reverse gap-2 sm:flex-row sm:justify-end pt-4',
});

type IDrawerProps = React.ComponentProps<typeof UIDrawer> &
  VariantProps<typeof drawerStyle> & { className?: string };

type IDrawerBackdropProps = React.ComponentProps<typeof UIDrawer.Backdrop> &
  VariantProps<typeof drawerBackdropStyle> & { className?: string };

type IDrawerContentProps = React.ComponentProps<typeof UIDrawer.Content> &
  VariantProps<typeof drawerContentStyle> & { className?: string };

type IDrawerHeaderProps = React.ComponentProps<typeof UIDrawer.Header> &
  VariantProps<typeof drawerHeaderStyle> & { className?: string };

type IDrawerBodyProps = React.ComponentProps<typeof UIDrawer.Body> &
  VariantProps<typeof drawerBodyStyle> & { className?: string };

type IDrawerFooterProps = React.ComponentProps<typeof UIDrawer.Footer> &
  VariantProps<typeof drawerFooterStyle> & { className?: string };

type IDrawerCloseButtonProps = React.ComponentProps<
  typeof UIDrawer.CloseButton
> &
  VariantProps<typeof drawerCloseButtonStyle> & { className?: string };

const Drawer = React.forwardRef<
  React.ComponentRef<typeof UIDrawer>,
  IDrawerProps
>(function Drawer({ className, size = 'sm', anchor = 'left', ...props }, ref) {
  return (
    <UIDrawer
      ref={ref}
      {...props}
      pointerEvents="box-none"
      className={drawerStyle({ size, anchor, class: className })}
      context={{ size, anchor }}
    />
  );
});

const DrawerBackdrop = React.forwardRef<
  React.ComponentRef<typeof UIDrawer.Backdrop>,
  IDrawerBackdropProps
>(function DrawerBackdrop({ className, ...props }, ref) {
  return (
    <UIDrawer.Backdrop
      ref={ref}
      entering={FadeIn.duration(150)}
      exiting={FadeOut.duration(150)}
      {...props}
      className={drawerBackdropStyle({
        class: className,
      })}
    />
  );
});

const DrawerContent = React.forwardRef<
  React.ComponentRef<typeof UIDrawer.Content>,
  IDrawerContentProps
>(function DrawerContent({ className, ...props }, ref) {
  const { size: parentSize, anchor: parentAnchor } = useStyleContext(SCOPE);

  const isHorizontal = parentAnchor === 'left' || parentAnchor === 'right';

  const customClass = isHorizontal
    ? `top-0 ${parentAnchor === 'left' ? 'left-0' : 'right-0'}`
    : `left-0 ${parentAnchor === 'top' ? 'top-0' : 'bottom-0'}`;

  return (
    <UIDrawer.Content
      ref={ref}
      entering={SlideInLeft.duration(150).springify().stiffness(700)}
      exiting={SlideOutLeft.duration(150).springify()}
      {...props}
      className={drawerContentStyle({
        parentVariants: {
          size: parentSize,
          anchor: parentAnchor,
        },
        class: `${className} ${customClass}`,
      })}
      pointerEvents="auto"
    />
  );
});

const DrawerHeader = React.forwardRef<
  React.ComponentRef<typeof UIDrawer.Header>,
  IDrawerHeaderProps
>(function DrawerHeader({ className, ...props }, ref) {
  return (
    <UIDrawer.Header
      ref={ref}
      {...props}
      className={drawerHeaderStyle({
        class: className,
      })}
    />
  );
});

const DrawerBody = React.forwardRef<
  React.ComponentRef<typeof UIDrawer.Body>,
  IDrawerBodyProps
>(function DrawerBody({ className, ...props }, ref) {
  return (
    <UIDrawer.Body
      ref={ref}
      {...props}
      className={drawerBodyStyle({
        class: className,
      })}
    />
  );
});

const DrawerFooter = React.forwardRef<
  React.ComponentRef<typeof UIDrawer.Footer>,
  IDrawerFooterProps
>(function DrawerFooter({ className, ...props }, ref) {
  return (
    <UIDrawer.Footer
      ref={ref}
      {...props}
      className={drawerFooterStyle({
        class: className,
      })}
    />
  );
});

const DrawerCloseButton = React.forwardRef<
  React.ComponentRef<typeof UIDrawer.CloseButton>,
  IDrawerCloseButtonProps
>(function DrawerCloseButton({ className, ...props }, ref) {
  return (
    <UIDrawer.CloseButton
      ref={ref}
      {...props}
      className={drawerCloseButtonStyle({
        class: className,
      })}
    />
  );
});

Drawer.displayName = 'Drawer';
DrawerBackdrop.displayName = 'DrawerBackdrop';
DrawerContent.displayName = 'DrawerContent';
DrawerHeader.displayName = 'DrawerHeader';
DrawerBody.displayName = 'DrawerBody';
DrawerFooter.displayName = 'DrawerFooter';
DrawerCloseButton.displayName = 'DrawerCloseButton';

export {
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
};
