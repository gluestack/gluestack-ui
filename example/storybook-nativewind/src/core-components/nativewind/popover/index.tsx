'use client';

import React from 'react';
import { createPopover } from '@gluestack-ui/popover';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates';
import { cssInterop } from '@gluestack-ui/nativewind-utils/cssInterop';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

import { View, Pressable, Platform, ScrollView } from 'react-native';

import {
  Motion,
  createMotionAnimatedComponent,
  AnimatePresence,
} from '@legendapp/motion';

const AnimatedPressable = createMotionAnimatedComponent(Pressable);
const SCOPE = 'POPOVER';
const UIPopover = createPopover({
  // @ts-ignore
  Root:
    Platform.OS === 'web'
      ? withStyleContext(View, SCOPE)
      : withStyleContextAndStates(View, SCOPE),
  Arrow: Motion.View,
  Backdrop: AnimatedPressable,
  Body: ScrollView,
  CloseButton: Pressable,
  Content: Motion.View,
  Footer: View,
  Header: View,
  AnimatedPresence: AnimatePresence,
});

cssInterop(UIPopover, { className: 'style' });
cssInterop(UIPopover.Arrow, { className: 'style' });
cssInterop(UIPopover.Content, { className: 'style' });
cssInterop(UIPopover.Header, { className: 'style' });
cssInterop(UIPopover.Footer, { className: 'style' });
cssInterop(UIPopover.Body, { className: 'style' });
cssInterop(UIPopover.Backdrop, { className: 'style' });
cssInterop(UIPopover.CloseButton, { className: 'style' });

const popoverStyle = tva({
  base: 'group/popover w-full h-full justify-center items-center web:pointer-events-none',
  variants: {
    size: {
      xs: '',
      sm: '',
      md: '',
      lg: '',
      full: '',
    },
  },
});
const popoverArrowStyle = tva({
  base: 'bg-background-50 z-1 absolute overflow-hidden h-3.5 w-3.5',
});

const popoverBackdropStyle = tva({
  base: 'absolute left-0 top-0 right-0 bottom-0 bg-background-dark web:cursor-default',
});

const popoverBodyStyle = tva({
  base: 'p-4 pt-2',
});

const popoverCloseButtonStyle = tva({
  base: 'group/popover-close-button z-10 p-2 rounded-sm data-[focus-visible=true]:web:bg-background-100 web:outline-0 cursor-pointer',
});

const popoverContentStyle = tva({
  base: 'bg-background-50 rounded-lg overflow-hidden',
  parentVariants: {
    size: {
      xs: 'w-[60%] max-w-[360px]',
      sm: 'w-[70%] max-w-[420px]',
      md: 'w-[80%] max-w-[510px]',
      lg: 'w-[90%] max-w-[640px]',
      full: 'w-full',
    },
  },
});

const popoverFooterStyle = tva({
  base: 'p-4 flex-row justify-end items-center flex-wrap border-t border-outline-300',
});

const popoverHeaderStyle = tva({
  base: 'p-4 pb-2 justify-between items-center flex-row',
});

type IPopoverProps = React.ComponentProps<typeof UIPopover> &
  VariantProps<typeof popoverStyle>;

type IPopoverArrowProps = React.ComponentProps<typeof UIPopover.Arrow> &
  VariantProps<typeof popoverArrowStyle>;

type IPopoverContentProps = React.ComponentProps<typeof UIPopover.Content> &
  VariantProps<typeof popoverContentStyle>;

type IPopoverHeaderProps = React.ComponentProps<typeof UIPopover.Header> &
  VariantProps<typeof popoverHeaderStyle>;

type IPopoverFooterProps = React.ComponentProps<typeof UIPopover.Footer> &
  VariantProps<typeof popoverFooterStyle>;

type IPopoverBodyProps = React.ComponentProps<typeof UIPopover.Body> &
  VariantProps<typeof popoverBodyStyle>;

type IPopoverBackdropProps = React.ComponentProps<typeof UIPopover.Backdrop> &
  VariantProps<typeof popoverBackdropStyle>;

type IPopoverCloseButtonProps = React.ComponentProps<
  typeof UIPopover.CloseButton
> &
  VariantProps<typeof popoverCloseButtonStyle>;

const Popover = React.forwardRef(
  (
    {
      className,
      size = 'md',
      ...props
    }: { className?: string } & IPopoverProps,
    ref?: any
  ) => (
    <UIPopover
      ref={ref}
      {...props}
      // @ts-ignore
      className={popoverStyle({ size, class: className })}
      context={{ size }}
      pointerEvents="box-none"
    />
  )
);

const PopoverArrow = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IPopoverArrowProps,
    ref?: any
  ) => (
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
      className={popoverArrowStyle({ class: className })}
    />
  )
);

const PopoverBackdrop = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IPopoverBackdropProps,
    ref?: any
  ) => {
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
  }
);

const PopoverBody = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IPopoverBodyProps,
    ref?: any
  ) => (
    <UIPopover.Body
      ref={ref}
      {...props}
      className={popoverBodyStyle({
        class: className,
      })}
    />
  )
);

const PopoverCloseButton = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IPopoverCloseButtonProps,
    ref?: any
  ) => (
    <UIPopover.CloseButton
      ref={ref}
      {...props}
      className={popoverCloseButtonStyle({
        class: className,
      })}
    />
  )
);

const PopoverContent = React.forwardRef(
  (
    {
      className,
      size,
      ...props
    }: { className?: string } & IPopoverContentProps,
    ref?: any
  ) => {
    const { size: parentSize } = useStyleContext(SCOPE);

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
          parentVariants: {
            size: parentSize,
          },
          size,
          class: className,
        })}
        pointerEvents="auto"
      />
    );
  }
);

const PopoverFooter = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IPopoverFooterProps,
    ref?: any
  ) => (
    <UIPopover.Footer
      ref={ref}
      {...props}
      className={popoverFooterStyle({
        class: className,
      })}
    />
  )
);

const PopoverHeader = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IPopoverHeaderProps,
    ref?: any
  ) => (
    <UIPopover.Header
      ref={ref}
      {...props}
      className={popoverHeaderStyle({
        class: className,
      })}
    />
  )
);

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
