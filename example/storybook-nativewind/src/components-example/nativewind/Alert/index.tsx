import { createAlert } from '@gluestack-ui/alert';
import { View, Text } from 'react-native';
import {
  tva,
  useStyleContext,
  withStyleContext,
} from '@gluestack-ui/nativewind-utils';
import React from 'react';
import { cssInterop } from 'nativewind';

const alertStyle = tva({
  base: 'items-center p-3 rounded-sm flex-row',

  variants: {
    action: {
      error: 'bg-background-error border-error-300 ',
      warning: 'bg-background-warning border-warning-300',
      success: 'bg-background-success border-success-300',
      info: 'bg-background-info border-info-300',
      muted: 'bg-background-muted border-muted-300',
    },

    variant: {
      solid: '',
      outline: 'border bg-transparent',
      accent: 'border-l-4',
    },
  },
  defaultVariants: {
    variant: 'solid',
    action: 'info',
  },
});

const alertTextStyle = tva({
  base: 'text-typography-700 flex-1 font-normal font-body',

  variants: {
    isTruncated: {
      true: 'web:truncate',
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
    sub: {
      true: 'text-xs',
    },
    italic: {
      true: 'italic',
    },
    highlight: {
      true: 'bg-yellow-500',
    },
  },
});

const alertIconStyle = tva({
  parentVariants: {
    action: {
      error: 'text-error-500',
      warning: 'text-warning-500',
      success: 'text-success-500',
      info: 'text-info-500',
      muted: 'text-muted-500',
    },
  },
  variants: {
    size: {
      '2xs': 'h-3 w-3',
      'xs': 'h-3.5 w-3.5',
      'sm': 'h-4 w-4',
      'md': 'h-[18px] w-[18px]',
      'lg': 'h-5 w-5',
      'xl': 'h-6 w-6',
    },
  },
});

export const UIAlert = createAlert({
  Root: withStyleContext(View),
  Text: Text,
  Icon: View,
});

cssInterop(UIAlert, { className: 'style' });
cssInterop(UIAlert.Text, { className: 'style' });
cssInterop(UIAlert.Icon, { className: 'style' });

const Alert = ({
  className,
  variant = 'solid',
  action = 'info',
  ...props
}: any) => {
  return (
    <UIAlert
      className={alertStyle({ action, variant, class: className })}
      context={{ variant, action }}
      {...props}
    />
  );
};
const AlertText = ({
  className,
  isTruncated,
  bold,
  underline,
  strikeThrough,
  size = 'md',
  sub,
  italic,
  highlight,
  ...props
}: any) => {
  return (
    <UIAlert.Text
      className={alertTextStyle({
        isTruncated,
        bold,
        underline,
        strikeThrough,
        size,
        sub,
        italic,
        highlight,
        class: className,
      })}
      {...props}
    />
  );
};
const AlertIcon = ({
  className,
  size = 'md',
  fill = 'none',
  as: AsComp,
  ...props
}: any) => {
  const { action } = useStyleContext();
  if (AsComp) {
    return (
      <AsComp
        className={alertIconStyle({
          parentVariants: { action },
          size,
          fill,
          class: className,
        })}
        {...props}
      />
    );
  }
  return (
    <UIAlert.Icon
      className={alertIconStyle({
        parentVariants: { action },
        size,
        fill,
        class: className,
      })}
      {...props}
    />
  );
};

Alert.displayName = 'Alert';
AlertText.displayName = 'AlertText';

export { Alert, AlertText, AlertIcon };
