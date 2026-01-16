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
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
} from 'react-native-reanimated';

const SCOPE = 'MODAL';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const sizes: { [key: string]: number } = {
  sm: 0.25,
  md: 0.5,
  lg: 0.75,
  full: 1,
};

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
  const opacity = useSharedValue(0);

  // Animated style for backdrop fade
  const animatedBackdropStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  }, [opacity]);

  // Trigger animation on mount
  React.useEffect(() => {
    // Fade in when backdrop appears
    opacity.value = withTiming(1, {
      duration: 150,
      easing: Easing.ease,
    });

    // Cleanup: fade out when unmounting
    return () => {
      opacity.value = withTiming(0, {
        duration: 150,
        easing: Easing.ease,
      });
    };
  }, [opacity]);

  return (
    <UIDrawer.Backdrop
      ref={ref}
      style={animatedBackdropStyle}
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

  // Calculate drawer dimensions based on size
  const drawerHeight = screenHeight * (sizes[parentSize] || sizes.md);
  const drawerWidth = screenWidth * (sizes[parentSize] || sizes.md);

  const isHorizontal = parentAnchor === 'left' || parentAnchor === 'right';

  // Shared values for animation
  const translateX = useSharedValue(
    isHorizontal ? (parentAnchor === 'left' ? -drawerWidth : drawerWidth) : 0
  );
  const translateY = useSharedValue(
    !isHorizontal ? (parentAnchor === 'top' ? -drawerHeight : drawerHeight) : 0
  );
  const opacity = useSharedValue(0);

  // Animated style for drawer content slide
  const animatedContentStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
      opacity: opacity.value,
    };
  }, [translateX, translateY, opacity]);

  // Trigger animation on mount
  React.useEffect(() => {
    // Slide in animation
    if (isHorizontal) {
      translateX.value = withSpring(0, {
        damping: 30,
        stiffness: 300,
        mass: 0.8,
      });
    } else {
      translateY.value = withSpring(0, {
        damping: 30,
        stiffness: 300,
        mass: 0.8,
      });
    }

    // Fade in simultaneously
    opacity.value = withTiming(1, {
      duration: 150,
      easing: Easing.ease,
    });

    // Cleanup: slide out when unmounting
    return () => {
      if (isHorizontal) {
        translateX.value = withTiming(
          parentAnchor === 'left' ? -drawerWidth : drawerWidth,
          {
            duration: 200,
            easing: Easing.ease,
          }
        );
      } else {
        translateY.value = withTiming(
          parentAnchor === 'top' ? -drawerHeight : drawerHeight,
          {
            duration: 200,
            easing: Easing.ease,
          }
        );
      }
      opacity.value = withTiming(0, {
        duration: 150,
        easing: Easing.ease,
      });
    };
  }, [
    translateX,
    translateY,
    opacity,
    isHorizontal,
    parentAnchor,
    drawerWidth,
    drawerHeight,
  ]);

  // Calculate positioning classes and inline styles
  const customClass = isHorizontal
    ? `top-0 ${parentAnchor === 'left' ? 'left-0' : 'right-0'}`
    : `left-0 ${parentAnchor === 'top' ? 'top-0' : 'bottom-0'}`;

  // Calculate dynamic width/height based on size and anchor
  const dynamicStyle = isHorizontal
    ? { width: drawerWidth }
    : { height: drawerHeight };

  return (
    <UIDrawer.Content
      ref={ref}
      style={[animatedContentStyle, dynamicStyle]}
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
