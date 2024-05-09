'use client';
import React from 'react';
import { createToast, createToastHook } from '@gluestack-ui/toast';
import { Text, View } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { cssInterop } from '@gluestack-ui/nativewind-utils/cssInterop';
import { Motion, AnimatePresence } from '@legendapp/motion';

export const useToast = createToastHook(Motion.View, AnimatePresence);

export const UIToast = createToast({
  Root: View,
  Title: Text,
  Description: Text,
});

cssInterop(Motion.View, { className: 'style' });
cssInterop(UIToast, { className: 'style' });
cssInterop(UIToast.Title, { className: 'style' });
cssInterop(UIToast.Description, { className: 'style' });

const toastStyle = tva({
  base: 'px-4 py-3 m-3 rounded flex-row web:pointer-events-auto shadow',
  variants: {
    action: {
      error: 'bg-background-error border-error-300',

      warning: 'bg-background-warning border-warning-300',

      success: 'bg-background-success border-success-300',

      info: 'bg-background-info border-info-300',

      attention: 'bg-background-muted border-secondary-300',
    },

    variant: {
      solid: '',
      outline: 'border',
      accent: 'border-l-4',
    },
  },

  defaultVariants: {
    variant: 'solid',
    action: 'attention',
  },
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
      'md': 'text-md',
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
      'md': 'text-md',
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
  ({ className, variant, action, ...props }: any, ref?: any) => {
    return (
      <UIToast
        ref={ref}
        {...props}
        className={toastStyle({ variant, action, class: className })}
      />
    );
  }
);

export const ToastTitle = React.forwardRef(
  ({ className, size = 'md', ...props }: any, ref?: any) => {
    return (
      <UIToast.Title
        ref={ref}
        {...props}
        className={toastTitleStyle({
          size,
          class: className,
        })}
      />
    );
  }
);
export const ToastDescription = React.forwardRef(
  ({ className, size, ...props }: any, ref?: any) => {
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
