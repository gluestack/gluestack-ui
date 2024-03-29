'use client';
import React from 'react';
import { createAlertDialog } from '@gluestack-ui/alert-dialog';

import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates';
import { cssInterop } from '@gluestack-ui/nativewind-utils/cssInterop';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

import {
  Motion,
  AnimatePresence,
  createMotionAnimatedComponent,
} from '@legendapp/motion';

import { View, Pressable, ScrollView, Platform } from 'react-native';

const AnimatedPressable = createMotionAnimatedComponent(Pressable);
const SCOPE = 'ALERT_DIALOG';
const UIAccessibleAlertDialog = createAlertDialog({
  // @ts-ignore
  Root:
    Platform.OS === 'web'
      ? withStyleContext(View, SCOPE)
      : withStyleContextAndStates(View, SCOPE),
  Body: ScrollView,
  Content: Motion.View,
  CloseButton: Pressable,
  Header: View,
  Footer: View,
  Backdrop: AnimatedPressable,
  AnimatePresence: AnimatePresence, //TODO: Add support for this
});

cssInterop(UIAccessibleAlertDialog, { className: 'style' });
cssInterop(UIAccessibleAlertDialog.Content, { className: 'style' });
cssInterop(UIAccessibleAlertDialog.CloseButton, { className: 'style' });
cssInterop(UIAccessibleAlertDialog.Header, { className: 'style' });
cssInterop(UIAccessibleAlertDialog.Footer, { className: 'style' });
cssInterop(UIAccessibleAlertDialog.Body, { className: 'style' });
cssInterop(UIAccessibleAlertDialog.Backdrop, { className: 'style' });

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
  base: 'bg-background-50 rounded-lg overflow-hidden ',
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
  base: 'p-4 justify-between items-center flex-row',
});

const alertDialogFooterStyle = tva({
  base: 'p-4 flex-row justify-end items-center flex-wrap',
});

const alertDialogBodyStyle = tva({ base: 'px-4 py-2' });

const alertDialogBackdropStyle = tva({
  base: 'absolute left-0 top-0 right-0 bottom-0 bg-background-dark web:cursor-default',
});

type IAlertDialogProps = React.ComponentProps<typeof UIAccessibleAlertDialog> &
  VariantProps<typeof alertDialogStyle>;

type IAlertDialogContentProps = React.ComponentProps<
  typeof UIAccessibleAlertDialog.Content
> &
  VariantProps<typeof alertDialogContentStyle>;

type IAlertDialogCloseButtonProps = React.ComponentProps<
  typeof UIAccessibleAlertDialog.CloseButton
> &
  VariantProps<typeof alertDialogCloseButtonStyle>;

type IAlertDialogHeaderProps = React.ComponentProps<
  typeof UIAccessibleAlertDialog.Header
> &
  VariantProps<typeof alertDialogHeaderStyle>;

type IAlertDialogFooterProps = React.ComponentProps<
  typeof UIAccessibleAlertDialog.Footer
> &
  VariantProps<typeof alertDialogFooterStyle>;

type IAlertDialogBodyProps = React.ComponentProps<
  typeof UIAccessibleAlertDialog.Body
> &
  VariantProps<typeof alertDialogBodyStyle>;

type IAlertDialogBackdropProps = React.ComponentProps<
  typeof UIAccessibleAlertDialog.Backdrop
> &
  VariantProps<typeof alertDialogBackdropStyle>;

const AlertDialog = React.forwardRef(
  (
    {
      className,
      size = 'md',
      ...props
    }: { className?: string } & IAlertDialogProps,
    ref?: any
  ) => {
    return (
      <UIAccessibleAlertDialog
        ref={ref}
        {...props}
        className={alertDialogStyle({ class: className })}
        context={{ size }}
        pointerEvents="box-none"
      />
    );
  }
);

const AlertDialogContent = React.forwardRef(
  (
    {
      className,
      size,
      ...props
    }: { className?: string } & IAlertDialogContentProps,
    ref?: any
  ) => {
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
  }
);

const AlertDialogCloseButton = React.forwardRef(
  (
    {
      className,
      ...props
    }: { className?: string } & IAlertDialogCloseButtonProps,
    ref?: any
  ) => {
    return (
      <UIAccessibleAlertDialog.CloseButton
        ref={ref}
        {...props}
        className={alertDialogCloseButtonStyle({
          class: className,
        })}
      />
    );
  }
);

const AlertDialogHeader = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IAlertDialogHeaderProps,
    ref?: any
  ) => {
    return (
      <UIAccessibleAlertDialog.Header
        ref={ref}
        {...props}
        className={alertDialogHeaderStyle({
          class: className,
        })}
      />
    );
  }
);

const AlertDialogFooter = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IAlertDialogFooterProps,
    ref?: any
  ) => {
    return (
      <UIAccessibleAlertDialog.Footer
        ref={ref}
        {...props}
        className={alertDialogFooterStyle({
          class: className,
        })}
      />
    );
  }
);

const AlertDialogBody = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IAlertDialogBodyProps,
    ref?: any
  ) => {
    return (
      <UIAccessibleAlertDialog.Body
        ref={ref}
        {...props}
        className={alertDialogBodyStyle({
          class: className,
        })}
      />
    );
  }
);

const AlertDialogBackdrop = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IAlertDialogBackdropProps,
    ref?: any
  ) => {
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
  }
);

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
