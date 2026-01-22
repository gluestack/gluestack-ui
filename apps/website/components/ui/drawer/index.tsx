'use client';
import { createModal as createDrawer } from '@gluestack-ui/core/modal/creator';
import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';

import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import {
  tva,
  useStyleContext,
  withStyleContext,
} from '@gluestack-ui/utils/nativewind-utils';
import { cssInterop } from 'nativewind';
import Animated, {
  SlideInLeft,
  SlideInRight,
  SlideInUp,
  SlideInDown,
  SlideOutLeft,
  SlideOutRight,
  SlideOutUp,
  SlideOutDown,
  FadeIn,
  FadeOut,
  Easing,
} from 'react-native-reanimated';

const SCOPE = 'MODAL';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedView = Animated.createAnimatedComponent(View);

const UIDrawer = createDrawer({
  Root: withStyleContext(View as any, SCOPE),
  Backdrop: AnimatedPressable,
  Content: AnimatedView,
  Body: ScrollView,
  CloseButton: Pressable,
  Footer: View,
  Header: View,
});

cssInterop(AnimatedPressable, { className: 'style' });
cssInterop(AnimatedView, { className: 'style' });
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
  base: 'absolute left-0 top-0 right-0 bottom-0 bg-black/50 web:cursor-default',
});

const drawerContentStyle = tva({
  base: 'bg-background shadow-hard-5 p-6 absolute',
  parentVariants: {
    size: {
      sm: '',
      md: '',
      lg: '',
      full: '',
    },
    anchor: {
      left: 'h-full border-r border-border/80',
      right: 'h-full border-l border-border/80',
      top: 'w-full border-b border-border/80 rounded-b-xl',
      bottom: 'w-full border-t border-border/80 rounded-t-xl',
    },
  },
  parentCompoundVariants: [
    {
      size: 'sm',
      anchor: 'left',
      class: 'sm:w-1/4 w-2/5',
    },
    {
      size: 'sm',
      anchor: 'right',
      class: 'sm:w-1/4 w-2/5',
    },
    {
      size: 'sm',
      anchor: 'top',
      class: 'h-1/4',
    },
    {
      size: 'sm',
      anchor: 'bottom',
      class: 'h-1/4',
    },
    {
      size: 'md',
      anchor: 'left',
      class: 'w-1/2',
    },
    {
      size: 'md',
      anchor: 'right',
      class: 'w-1/2',
    },
    {
      size: 'md',
      anchor: 'top',
      class: 'h-1/2',
    },
    {
      size: 'md',
      anchor: 'bottom',
      class: 'h-1/2',
    },
    {
      size: 'lg',
      anchor: 'left',
      class: 'w-3/4',
    },
    {
      size: 'lg',
      anchor: 'right',
      class: 'w-3/4',
    },
    {
      size: 'lg',
      anchor: 'top',
      class: 'h-3/4',
    },
    {
      size: 'lg',
      anchor: 'bottom',
      class: 'h-3/4',
    },
    {
      size: 'full',
      anchor: 'left',
      class: 'w-full',
    },
    {
      size: 'full',
      anchor: 'right',
      class: 'w-full',
    },
    {
      size: 'full',
      anchor: 'top',
      class: 'h-full',
    },
    {
      size: 'full',
      anchor: 'bottom',
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
  base: 'mt-4 mb-6 shrink-0',
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
>(function Drawer({ className, size = 'md', anchor = 'left', ...props }, ref) {
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
      entering={FadeIn.duration(200).easing(Easing.in(Easing.cubic))}
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

  // Calculate positioning classes
  const customClass =
    parentAnchor === 'left' || parentAnchor === 'right'
      ? `top-0 ${parentAnchor === 'left' ? 'left-0' : 'right-0'}`
      : `left-0 ${parentAnchor === 'top' ? 'top-0' : 'bottom-0'}`;

  // Select entering and exiting animations based on anchor
  const enteringAnimation =
    parentAnchor === 'left'
      ? SlideInLeft.duration(200).easing(Easing.in(Easing.cubic))
      : parentAnchor === 'right'
        ? SlideInRight.duration(200)
        : parentAnchor === 'top'
          ? SlideInUp.duration(200)
          : SlideInDown.duration(200);

  const exitingAnimation =
    parentAnchor === 'left'
        ? SlideOutLeft.duration(200)
      : parentAnchor === 'right'
        ? SlideOutRight.duration(200)
        : parentAnchor === 'top'
          ? SlideOutUp.duration(200)
          : SlideOutDown.duration(200);

  return (
    <UIDrawer.Content
      ref={ref}
      entering={enteringAnimation}
      exiting={exitingAnimation}
      {...props}
      className={drawerContentStyle({
        parentVariants: {
          size: parentSize,
          anchor: parentAnchor,
        },
        class: `${className || ''} ${customClass}`,
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
