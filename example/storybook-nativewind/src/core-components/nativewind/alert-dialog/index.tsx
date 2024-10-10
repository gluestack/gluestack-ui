'use client';
import React from 'react';
import { createAlertDialog } from '@gluestack-ui/alert-dialog';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';

import { cssInterop } from 'nativewind';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import {
  Motion,
  AnimatePresence,
  createMotionAnimatedComponent,
} from '@legendapp/motion';
import { View, Pressable, ScrollView } from 'react-native';

const AnimatedPressable = createMotionAnimatedComponent(Pressable);

const SCOPE = 'ALERT_DIALOG';

const UIAccessibleAlertDialog = createAlertDialog({
  Root: withStyleContext(View, SCOPE),
  Body: ScrollView,
  Content: Motion.View,
  CloseButton: Pressable,
  Header: View,
  Footer: View,
  Backdrop: AnimatedPressable,
  AnimatePresence: AnimatePresence,
});

cssInterop(Motion.View, { className: 'style' });
cssInterop(AnimatedPressable, { className: 'style' });

const alertDialogStyle = tva({
  base: 'group/modal w-full h-full justify-center items-center web:pointer-events-none',
  parentVariants: {
    size: {
      xs: '',
      sm: '',
      md: '',
      lg: '',
      full: '',
    },
  },
});

const alertDialogContentStyle = tva({
  base: 'bg-background-0 rounded-lg overflow-hidden border border-outline-100 p-6',
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

const alertDialogCloseButtonStyle = tva({
  base: 'group/alert-dialog-close-button z-10 rounded-sm p-2 data-[focus-visible=true]:bg-background-100 web:cursor-pointer outline-0',
});

const alertDialogHeaderStyle = tva({
  base: 'justify-between items-center flex-row',
});

const alertDialogFooterStyle = tva({
  base: 'flex-row justify-end items-center gap-3',
});

const alertDialogBodyStyle = tva({ base: '' });

const alertDialogBackdropStyle = tva({
  base: 'absolute left-0 top-0 right-0 bottom-0 bg-background-dark web:cursor-default',
});

type IAlertDialogProps = React.ComponentPropsWithoutRef<
  typeof UIAccessibleAlertDialog
> &
  VariantProps<typeof alertDialogStyle>;

type IAlertDialogContentProps = React.ComponentPropsWithoutRef<
  typeof UIAccessibleAlertDialog.Content
> &
  VariantProps<typeof alertDialogContentStyle> & { className?: string };

type IAlertDialogCloseButtonProps = React.ComponentPropsWithoutRef<
  typeof UIAccessibleAlertDialog.CloseButton
> &
  VariantProps<typeof alertDialogCloseButtonStyle>;

type IAlertDialogHeaderProps = React.ComponentPropsWithoutRef<
  typeof UIAccessibleAlertDialog.Header
> &
  VariantProps<typeof alertDialogHeaderStyle>;

type IAlertDialogFooterProps = React.ComponentPropsWithoutRef<
  typeof UIAccessibleAlertDialog.Footer
> &
  VariantProps<typeof alertDialogFooterStyle>;

type IAlertDialogBodyProps = React.ComponentPropsWithoutRef<
  typeof UIAccessibleAlertDialog.Body
> &
  VariantProps<typeof alertDialogBodyStyle>;

type IAlertDialogBackdropProps = React.ComponentPropsWithoutRef<
  typeof UIAccessibleAlertDialog.Backdrop
> &
  VariantProps<typeof alertDialogBackdropStyle> & { className?: string };

const AlertDialog = React.forwardRef<
  React.ElementRef<typeof UIAccessibleAlertDialog>,
  IAlertDialogProps
>(({ className, size = 'md', ...props }, ref) => {
  return (
    <UIAccessibleAlertDialog
      ref={ref}
      {...props}
      className={alertDialogStyle({ class: className })}
      context={{ size }}
      pointerEvents="box-none"
    />
  );
});

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof UIAccessibleAlertDialog.Content>,
  IAlertDialogContentProps
>(({ className, size, ...props }, ref) => {
  const { size: parentSize } = useStyleContext(SCOPE);

  return (
    <UIAccessibleAlertDialog.Content
      pointerEvents="auto"
      ref={ref}
      initial={{
        scale: 0.9,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0.9,
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
      className={alertDialogContentStyle({
        parentVariants: {
          size: parentSize,
        },
        size,
        class: className,
      })}
    />
  );
});

const AlertDialogCloseButton = React.forwardRef<
  React.ElementRef<typeof UIAccessibleAlertDialog.CloseButton>,
  IAlertDialogCloseButtonProps
>(({ className, ...props }, ref) => {
  return (
    <UIAccessibleAlertDialog.CloseButton
      ref={ref}
      {...props}
      className={alertDialogCloseButtonStyle({
        class: className,
      })}
    />
  );
});

const AlertDialogHeader = React.forwardRef<
  React.ElementRef<typeof UIAccessibleAlertDialog.Header>,
  IAlertDialogHeaderProps
>(({ className, ...props }, ref) => {
  return (
    <UIAccessibleAlertDialog.Header
      ref={ref}
      {...props}
      className={alertDialogHeaderStyle({
        class: className,
      })}
    />
  );
});

const AlertDialogFooter = React.forwardRef<
  React.ElementRef<typeof UIAccessibleAlertDialog.Footer>,
  IAlertDialogFooterProps
>(({ className, ...props }, ref) => {
  return (
    <UIAccessibleAlertDialog.Footer
      ref={ref}
      {...props}
      className={alertDialogFooterStyle({
        class: className,
      })}
    />
  );
});

const AlertDialogBody = React.forwardRef<
  React.ElementRef<typeof UIAccessibleAlertDialog.Body>,
  IAlertDialogBodyProps
>(({ className, ...props }, ref) => {
  return (
    <UIAccessibleAlertDialog.Body
      ref={ref}
      {...props}
      className={alertDialogBodyStyle({
        class: className,
      })}
    />
  );
});

const AlertDialogBackdrop = React.forwardRef<
  React.ElementRef<typeof UIAccessibleAlertDialog.Backdrop>,
  IAlertDialogBackdropProps
>(({ className, ...props }, ref) => {
  return (
    <UIAccessibleAlertDialog.Backdrop
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
      className={alertDialogBackdropStyle({
        class: className,
      })}
    />
  );
});

AlertDialog.displayName = 'AlertDialog';
AlertDialogContent.displayName = 'AlertDialogContent';
AlertDialogCloseButton.displayName = 'AlertDialogCloseButton';
AlertDialogHeader.displayName = 'AlertDialogHeader';
AlertDialogFooter.displayName = 'AlertDialogFooter';
AlertDialogBody.displayName = 'AlertDialogBody';
AlertDialogBackdrop.displayName = 'AlertDialogBackdrop';

export {
  AlertDialog,
  AlertDialogContent,
  AlertDialogCloseButton,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogBackdrop,
};
