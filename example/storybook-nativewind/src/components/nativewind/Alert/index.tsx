import { createAlert } from '@gluestack-ui/alert';
import { View, Text } from 'react-native';
import {
  tva,
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils';
import React from 'react';

const AccessibleAlert = createAlert({
  Root: withStyleContext(View),
  Text: Text,
  Icon: View,
});

const alertStyle = tva({
  base: 'items-center p-3 direction-row rounded-sm',
  variants: {
    action: {
      error: 'bg-backgroundError border-error-300',
      warning: 'bg-backgroundWarning border-warning-300',
      success: 'bg-backgroundSuccess border-success-300',
      info: 'bg-backgroundInfo border-info300',
      muted: 'bg-backgroundMuted border-secondary-300',
    },
    variant: {
      solid: '',
      outline: 'border bg-white',
      accent: 'border-l-4',
    },
  },
});

const alertTextStyle = tva({
  base: 'text-typography-700 font-normal font-body tracking-md text-left mx-2',
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
  base: 'text-typography-50 group-hover/fab:text-typography-0 group-active/fab:text-typography-0',
  parentVariants: {
    actions: {
      error: 'text-error-500',
      warning: 'text-warning-500',
      success: 'text-success-500',
      info: 'text-info-500',
      muted: 'text-secondary-500',
    },
  },
  variants: {
    size: {
      '2xs': 'h-3 w-3',
      'xs': 'h-3.5 w-3.5',
      'sm': 'h-4 w-4',
      'md': 'w-4 h-4',
      'lg': 'h-5 w-5',
      'xl': 'h-6 w-6',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const Alert = React.forwardRef(
  (
    { variant = 'solid', action = 'info', className, ...props }: any,
    ref?: any
  ) => {
    return (
      <AccessibleAlert
        {...props}
        className={alertStyle({ variant, action, class: className })}
        context={{ action }}
        ref={ref}
      />
    );
  }
);

const AlertText = React.forwardRef(
  ({ size = 'md', className, ...props }: any, ref: any) => {
    return (
      <Text
        {...props}
        className={alertTextStyle({ size, class: className })}
        ref={ref}
      />
    );
  }
);

const AlertIcon = React.forwardRef(
  ({ size = 'md', className, ...props }: any, ref: any) => {
    const { action: parentAction } = useStyleContext();
    return (
      <View
        {...props}
        className={alertIconStyle({
          parentVariants: {
            action: parentAction,
          },
          size,
          class: className,
        })}
        ref={ref}
      />
    );
  }
);

Alert.displayName = 'Alert';
AlertText.displayName = 'AlertText';
AlertIcon.displayName = 'AlertIcon';

export { Alert, AlertText, AlertIcon };
