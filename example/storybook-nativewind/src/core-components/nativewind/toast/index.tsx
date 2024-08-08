'use client';
import React from 'react';
import { createToast, createToastHook } from '@gluestack-ui/toast';
import { Text, View, Platform } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { cssInterop } from 'nativewind';
import { Motion, AnimatePresence } from '@legendapp/motion';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

export const useToast = createToastHook(Motion.View, AnimatePresence);
const SCOPE = 'TOAST';
export const UIToast = createToast({
  Root:
    Platform.OS === 'web'
      ? withStyleContext(View, SCOPE)
      : withStyleContextAndStates(View, SCOPE),
  Title: Text,
  Description: Text,
});

cssInterop(Motion.View, { className: 'style' });
cssInterop(UIToast, { className: 'style' });
cssInterop(UIToast.Title, { className: 'style' });
cssInterop(UIToast.Description, { className: 'style' });

const toastStyle = tva({
  base: 'p-4 m-1 rounded-md gap-1 web:pointer-events-auto shadow-hard-5 border-outline-100',
  variants: {
    action: {
      error: 'bg-error-800',
      warning: 'bg-warning-700',
      success: 'bg-success-700',
      info: 'bg-info-700',
      muted: 'bg-secondary-700',
    },

    variant: {
      solid: '',
      outline: 'border bg-background-0',
    },
  },
});

const toastTitleStyle = tva({
  base: 'text-typography-0 font-medium font-body tracking-md text-left',
  variants: {
    isTruncated: {
      true: '',
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
  },
  parentVariants: {
    variant: {
      solid: '',
      outline: '',
    },
    action: {
      error: '',
      warning: '',
      success: '',
      info: '',
      muted: '',
    },
  },
  parentCompoundVariants: [
    {
      variant: 'outline',
      action: 'error',
      class: 'text-error-800',
    },
    {
      variant: 'outline',
      action: 'warning',
      class: 'text-warning-800',
    },
    {
      variant: 'outline',
      action: 'success',
      class: 'text-success-800',
    },
    {
      variant: 'outline',
      action: 'info',
      class: 'text-info-800',
    },
    {
      variant: 'outline',
      action: 'muted',
      class: 'text-background-800',
    },
  ],
});

const toastDescriptionStyle = tva({
  base: 'font-normal font-body tracking-md text-left',
  variants: {
    isTruncated: {
      true: '',
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
  },
  parentVariants: {
    variant: {
      solid: 'text-typography-50',
      outline: 'text-typography-900',
    },
  },
});

type IToastProps = React.ComponentProps<typeof UIToast> & {
  className?: string;
} & VariantProps<typeof toastStyle>;

export const Toast = React.forwardRef<
  React.ElementRef<typeof UIToast>,
  IToastProps
>(({ className, variant = 'solid', action = 'muted', ...props }, ref) => {
  return (
    <UIToast
      ref={ref}
      className={toastStyle({ variant, action, class: className })}
      context={{ variant, action }}
      {...props}
    />
  );
});

type IToastTitleProps = React.ComponentProps<typeof UIToast.Title> & {
  className?: string;
} & VariantProps<typeof toastTitleStyle>;

export const ToastTitle = React.forwardRef<
  React.ElementRef<typeof UIToast.Title>,
  IToastTitleProps
>(({ className, size = 'md', ...props }, ref) => {
  const { variant: parentVariant, action: parentAction } =
    useStyleContext(SCOPE);
  return (
    <UIToast.Title
      ref={ref}
      {...props}
      className={toastTitleStyle({
        size,
        class: className,
        parentVariants: {
          variant: parentVariant,
          action: parentAction,
        },
      })}
    />
  );
});

type IToastDescriptionProps = React.ComponentProps<
  typeof UIToast.Description
> & {
  className?: string;
} & VariantProps<typeof toastDescriptionStyle>;

export const ToastDescription = React.forwardRef<
  React.ElementRef<typeof UIToast.Description>,
  IToastDescriptionProps
>(({ className, size = 'md', ...props }, ref) => {
  const { variant: parentVariant } = useStyleContext(SCOPE);
  return (
    <UIToast.Description
      ref={ref}
      {...props}
      className={toastDescriptionStyle({
        size,
        class: className,
        parentVariants: {
          variant: parentVariant,
        },
      })}
    />
  );
});
