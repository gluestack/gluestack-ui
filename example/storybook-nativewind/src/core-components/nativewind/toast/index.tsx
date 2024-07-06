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
  base: 'p-4 m-3 rounded-md gap-4 flex-row web:pointer-events-auto shadow-hard-5 bg-background-0',
  variants: {
    action: {
      error: 'border-error-300',
      warning: 'border-warning-300',
      success: 'border-success-300',
      info: 'border-info-300',
      muted: 'border-secondary-300',
    },

    variant: {
      solid: '',
      outline: 'border',
    },
  },
  compoundVariants: [
    {
      variant: 'solid',
      action: 'error',
      class: 'bg-background-error',
    },
    {
      variant: 'solid',
      action: 'warning',
      class: 'bg-background-warning',
    },
    {
      variant: 'solid',
      action: 'success',
      class: 'bg-background-success',
    },
    {
      variant: 'solid',
      action: 'info',
      class: 'bg-background-info',
    },
    {
      variant: 'solid',
      action: 'muted',
      class: 'bg-background-muted',
    },
  ],
});

const toastTitleStyle = tva({
  base: 'text-typography-700 font-medium font-body tracking-md text-left',
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
      class: 'text-muted-800',
    },
  ],
});

const toastDescriptionStyle = tva({
  base: 'text-typography-700 font-normal font-body tracking-md text-left',
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
});

export const Toast = React.forwardRef(
  (
    { className, variant = 'solid', action = 'muted', ...props }: any,
    ref?: any
  ) => {
    return (
      <UIToast
        ref={ref}
        {...props}
        className={toastStyle({ variant, action, class: className })}
        context={{ variant, action }}
      />
    );
  }
);

export const ToastTitle = React.forwardRef(
  ({ className, size = 'md', ...props }: any, ref?: any) => {
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
  }
);

export const ToastDescription = React.forwardRef(
  ({ className, size = 'md', ...props }: any, ref?: any) => {
    return (
      <UIToast.Description
        ref={ref}
        {...props}
        className={toastDescriptionStyle({
          size,
          class: className,
        })}
      />
    );
  }
);
