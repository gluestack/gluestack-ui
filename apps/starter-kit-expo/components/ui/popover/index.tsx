'use client';
import React from 'react';
import { View, Pressable, ScrollView, ViewStyle } from 'react-native';
import {
  Motion,
  createMotionAnimatedComponent,
  AnimatePresence,
  MotionComponentProps,
} from '@legendapp/motion';
import { createPopover } from '@gluestack-ui/core/popover/creator';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/utils/nativewind-utils';
import { cssInterop } from 'nativewind';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';

type IAnimatedPressableProps = React.ComponentProps<typeof Pressable> &
  MotionComponentProps<typeof Pressable, ViewStyle, unknown, unknown, unknown>;

const AnimatedPressable = createMotionAnimatedComponent(
  Pressable
) as React.ComponentType<IAnimatedPressableProps>;

const SCOPE = 'POPOVER';

type IMotionViewProps = React.ComponentProps<typeof View> &
  MotionComponentProps<typeof View, ViewStyle, unknown, unknown, unknown>;

const MotionView = Motion.View as React.ComponentType<IMotionViewProps>;

const UIPopover = createPopover({
  Root: withStyleContext(View, SCOPE),
  Arrow: MotionView,
  Backdrop: AnimatedPressable,
  Body: ScrollView,
  CloseButton: Pressable,
  Content: MotionView,
  Footer: View,
  Header: View,
  AnimatePresence: AnimatePresence,
});

cssInterop(MotionView, { className: 'style' });
cssInterop(AnimatedPressable, { className: 'style' });

const popoverStyle = tva({
  base: 'group/popover w-full h-full justify-center items-center web:pointer-events-none',
});

const popoverArrowStyle = tva({
  base: 'bg-popover z-[1] border absolute overflow-hidden h-3.5 w-3.5 border-border dark:border-border/10',
  variants: {
    placement: {
      'top left':
        'data-[flip=false]:border-t-0 data-[flip=false]:border-l-0 data-[flip=true]:border-b-0 data-[flip=true]:border-r-0',
      'top':
        'data-[flip=false]:border-t-0 data-[flip=false]:border-l-0 data-[flip=true]:border-b-0 data-[flip=true]:border-r-0',
      'top right':
        'data-[flip=false]:border-t-0 data-[flip=false]:border-l-0 data-[flip=true]:border-b-0 data-[flip=true]:border-r-0',
      'bottom':
        'data-[flip=false]:border-b-0 data-[flip=false]:border-r-0 data-[flip=true]:border-t-0 data-[flip=true]:border-l-0',
      'bottom left':
        'data-[flip=false]:border-b-0 data-[flip=false]:border-r-0 data-[flip=true]:border-t-0 data-[flip=true]:border-l-0',
      'bottom right':
        'data-[flip=false]:border-b-0 data-[flip=false]:border-r-0 data-[flip=true]:border-t-0 data-[flip=true]:border-l-0',
      'left':
        'data-[flip=false]:border-l-0 data-[flip=false]:border-b-0 data-[flip=true]:border-r-0 data-[flip=true]:border-t-0',
      'left top':
        'data-[flip=false]:border-l-0 data-[flip=false]:border-b-0 data-[flip=true]:border-r-0 data-[flip=true]:border-t-0',
      'left bottom':
        'data-[flip=false]:border-l-0 data-[flip=false]:border-b-0 data-[flip=true]:border-r-0 data-[flip=true]:border-t-0',
      'right':
        'data-[flip=false]:border-r-0 data-[flip=false]:border-t-0 data-[flip=true]:border-l-0 data-[flip=true]:border-b-0',
      'right top':
        'data-[flip=false]:border-r-0 data-[flip=false]:border-t-0 data-[flip=true]:border-l-0 data-[flip=true]:border-b-0',
      'right bottom':
        'data-[flip=false]:border-r-0 data-[flip=false]:border-t-0 data-[flip=true]:border-l-0 data-[flip=true]:border-b-0',
    },
  },
});

const popoverBackdropStyle = tva({
  base: 'absolute left-0 top-0 right-0 bottom-0 web:cursor-default',
});

const popoverCloseButtonStyle = tva({
  base: 'group/popover-close-button z-[1] rounded-sm p-2 data-[focus-visible=true]:bg-accent web:outline-0 web:cursor-pointer data-[hover=true]:bg-accent/50',
});

const popoverContentStyle = tva({
  base: 'bg-popover text-popover-foreground rounded-lg overflow-hidden border border-border dark:border-border/10 shadow-md p-4 w-full max-w-xs web:pointer-events-auto',
});

const popoverHeaderStyle = tva({
  base: 'flex-row justify-between items-center',
});

const popoverBodyStyle = tva({
  base: '',
});

const popoverFooterStyle = tva({
  base: 'flex-row justify-between items-center',
});

type IPopoverProps = React.ComponentProps<typeof UIPopover> &
  VariantProps<typeof popoverStyle> & { className?: string };

type IPopoverArrowProps = React.ComponentProps<typeof UIPopover.Arrow> &
  VariantProps<typeof popoverArrowStyle> & { className?: string };

type IPopoverContentProps = React.ComponentProps<typeof UIPopover.Content> &
  VariantProps<typeof popoverContentStyle> & { className?: string };

type IPopoverHeaderProps = React.ComponentProps<typeof UIPopover.Header> &
  VariantProps<typeof popoverHeaderStyle> & { className?: string };

type IPopoverFooterProps = React.ComponentProps<typeof UIPopover.Footer> &
  VariantProps<typeof popoverFooterStyle> & { className?: string };

type IPopoverBodyProps = React.ComponentProps<typeof UIPopover.Body> &
  VariantProps<typeof popoverBodyStyle> & { className?: string };

type IPopoverBackdropProps = React.ComponentProps<typeof UIPopover.Backdrop> &
  VariantProps<typeof popoverBackdropStyle> & { className?: string };

type IPopoverCloseButtonProps = React.ComponentProps<
  typeof UIPopover.CloseButton
> &
  VariantProps<typeof popoverCloseButtonStyle> & { className?: string };

const Popover = React.forwardRef<
  React.ComponentRef<typeof UIPopover>,
  IPopoverProps
>(function Popover({ className, placement = 'bottom', ...props }, ref) {
  return (
    <UIPopover
      ref={ref}
      placement={placement}
      {...props}
      className={popoverStyle({ class: className })}
      context={{ placement }}
      pointerEvents="box-none"
    />
  );
});

const PopoverContent = React.forwardRef<
  React.ComponentRef<typeof UIPopover.Content>,
  IPopoverContentProps
>(function PopoverContent({ className, ...props }, ref) {
  return (
    <UIPopover.Content
      ref={ref}
      transition={{
        type: 'spring',
        damping: 18,
        stiffness: 250,
        mass: 0.9,
        opacity: {
          type: 'timing',
          duration: 50,
          delay: 50,
        },
      }}
      {...props}
      className={popoverContentStyle({
        class: className,
      })}
      pointerEvents="auto"
    />
  );
});

const PopoverArrow = React.forwardRef<
  React.ComponentRef<typeof UIPopover.Arrow>,
  IPopoverArrowProps
>(function PopoverArrow({ className, ...props }, ref) {
  const { placement } = useStyleContext(SCOPE);
  return (
    <UIPopover.Arrow
      ref={ref}
      transition={{
        type: 'spring',
        damping: 18,
        stiffness: 250,
        mass: 0.9,
        opacity: {
          type: 'timing',
          duration: 50,
          delay: 50,
        },
      }}
      {...props}
      className={popoverArrowStyle({
        class: className,
        placement,
      })}
    />
  );
});

const PopoverBackdrop = React.forwardRef<
  React.ComponentRef<typeof UIPopover.Backdrop>,
  IPopoverBackdropProps
>(function PopoverBackdrop({ className, ...props }, ref) {
  return (
    <UIPopover.Backdrop
      ref={ref}
      {...props}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 0.1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        type: 'spring',
        damping: 18,
        stiffness: 450,
        mass: 0.9,
        opacity: {
          type: 'timing',
          duration: 50,
          delay: 50,
        },
      }}
      className={popoverBackdropStyle({
        class: className,
      })}
    />
  );
});

const PopoverBody = React.forwardRef<
  React.ComponentRef<typeof UIPopover.Body>,
  IPopoverBodyProps
>(function PopoverBody({ className, ...props }, ref) {
  return (
    <UIPopover.Body
      ref={ref}
      {...props}
      className={popoverBodyStyle({
        class: className,
      })}
    />
  );
});

const PopoverCloseButton = React.forwardRef<
  React.ComponentRef<typeof UIPopover.CloseButton>,
  IPopoverCloseButtonProps
>(function PopoverCloseButton({ className, ...props }, ref) {
  return (
    <UIPopover.CloseButton
      ref={ref}
      {...props}
      className={popoverCloseButtonStyle({
        class: className,
      })}
    />
  );
});

const PopoverFooter = React.forwardRef<
  React.ComponentRef<typeof UIPopover.Footer>,
  IPopoverFooterProps
>(function PopoverFooter({ className, ...props }, ref) {
  return (
    <UIPopover.Footer
      ref={ref}
      {...props}
      className={popoverFooterStyle({
        class: className,
      })}
    />
  );
});

const PopoverHeader = React.forwardRef<
  React.ComponentRef<typeof UIPopover.Header>,
  IPopoverHeaderProps
>(function PopoverHeader({ className, ...props }, ref) {
  return (
    <UIPopover.Header
      ref={ref}
      {...props}
      className={popoverHeaderStyle({
        class: className,
      })}
    />
  );
});

Popover.displayName = 'Popover';
PopoverArrow.displayName = 'PopoverArrow';
PopoverBackdrop.displayName = 'PopoverBackdrop';
PopoverContent.displayName = 'PopoverContent';
PopoverHeader.displayName = 'PopoverHeader';
PopoverFooter.displayName = 'PopoverFooter';
PopoverBody.displayName = 'PopoverBody';
PopoverCloseButton.displayName = 'PopoverCloseButton';

export {
  Popover,
  PopoverBackdrop,
  PopoverArrow,
  PopoverCloseButton,
  PopoverFooter,
  PopoverHeader,
  PopoverBody,
  PopoverContent,
};
