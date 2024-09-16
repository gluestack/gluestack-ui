'use client';
import React from 'react';
import { createModal as createDrawer } from '@gluestack-ui/modal';
import {
  Pressable,
  View,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native';
import {
  Motion,
  AnimatePresence,
  createMotionAnimatedComponent,
} from '@legendapp/motion';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates';
import { cssInterop } from 'nativewind';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

const AnimatedPressable = createMotionAnimatedComponent(Pressable);
const SCOPE = 'MODAL';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const sizes: { [key: string]: number } = {
  sm: 0.25,
  md: 0.5,
  lg: 0.75,
  full: 1,
};

const UIDrawer = createDrawer({
  Root:
    Platform.OS === 'web'
      ? withStyleContext(View, SCOPE)
      : withStyleContextAndStates(View, SCOPE),
  Backdrop: AnimatedPressable,
  Content: Motion.View,
  Body: ScrollView,
  CloseButton: Pressable,
  Footer: View,
  Header: View,
  AnimatePresence: AnimatePresence,
});
cssInterop(UIDrawer, { className: 'style' });
cssInterop(UIDrawer.Backdrop, { className: 'style' });
cssInterop(UIDrawer.Content, { className: 'style' });
cssInterop(UIDrawer.CloseButton, { className: 'style' });
cssInterop(UIDrawer.Header, { className: 'style' });
cssInterop(UIDrawer.Body, {
  className: 'style',
  contentContainerClassName: 'contentContainerStyle',
  indicatorClassName: 'indicatorStyle',
});
cssInterop(UIDrawer.Footer, { className: 'style' });

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
  base: 'absolute left-0 top-0 right-0 bottom-0 bg-background-dark web:cursor-default',
});

const drawerContentStyle = tva({
  base: 'bg-background-0 overflow-scroll border border-outline-100 p-6 absolute',
  parentVariants: {
    size: {
      sm: 'w-1/4',
      md: 'w-1/2',
      lg: 'w-3/4',
      full: 'w-full',
    },
    anchor: {
      left: 'h-full',
      right: 'h-full',
      top: 'w-full',
      bottom: 'w-full',
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
  base: 'z-10 rounded data-[focus-visible=true]:web:bg-background-100 web:outline-0 cursor-pointer',
});

const drawerHeaderStyle = tva({
  base: 'justify-between items-center flex-row',
});

const drawerBodyStyle = tva({
  base: 'mt-4 mb-6 shrink-0',
});

const drawerFooterStyle = tva({
  base: 'flex-row justify-end items-center',
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
  React.ElementRef<typeof UIDrawer>,
  IDrawerProps
>(({ className, size = 'sm', anchor = 'left', ...props }, ref) => {
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
  React.ElementRef<typeof UIDrawer.Backdrop>,
  IDrawerBackdropProps
>(({ className, ...props }, ref) => {
  return (
    <UIDrawer.Backdrop
      ref={ref}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 0.5,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        type: 'spring',
        damping: 18,
        stiffness: 250,
        opacity: {
          type: 'timing',
          duration: 250,
        },
      }}
      {...props}
      className={drawerBackdropStyle({
        class: className,
      })}
    />
  );
});

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof UIDrawer.Content>,
  IDrawerContentProps
>(({ className, ...props }, ref) => {
  const { size: parentSize, anchor: parentAnchor } = useStyleContext(SCOPE);

  const drawerHeight = screenHeight * (sizes[parentSize] || sizes.md);
  const drawerWidth = screenWidth * (sizes[parentSize] || sizes.md);

  const isHorizontal = parentAnchor === 'left' || parentAnchor === 'right';

  const initialObj = isHorizontal
    ? { x: parentAnchor === 'left' ? -drawerWidth : drawerWidth }
    : { y: parentAnchor === 'top' ? -drawerHeight : drawerHeight };

  const animateObj = isHorizontal ? { x: 0 } : { y: 0 };

  const exitObj = isHorizontal
    ? { x: parentAnchor === 'left' ? -drawerWidth : drawerWidth }
    : { y: parentAnchor === 'top' ? -drawerHeight : drawerHeight };

  const customClass = isHorizontal
    ? `top-0 ${parentAnchor === 'left' ? 'left-0' : 'right-0'}`
    : `left-0 ${parentAnchor === 'top' ? 'top-0' : 'bottom-0'}`;

  return (
    <UIDrawer.Content
      ref={ref}
      initial={initialObj}
      animate={animateObj}
      exit={exitObj}
      transition={{
        type: 'timing',
        duration: 300,
      }}
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
  React.ElementRef<typeof UIDrawer.Header>,
  IDrawerHeaderProps
>(({ className, ...props }, ref) => {
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
  React.ElementRef<typeof UIDrawer.Body>,
  IDrawerBodyProps
>(({ className, ...props }, ref) => {
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
  React.ElementRef<typeof UIDrawer.Footer>,
  IDrawerFooterProps
>(({ className, ...props }, ref) => {
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
  React.ElementRef<typeof UIDrawer.CloseButton>,
  IDrawerCloseButtonProps
>(({ className, ...props }, ref) => {
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
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
};
