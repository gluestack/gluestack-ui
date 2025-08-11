'use client';
import { createAlert } from '@gluestack-ui/core/alert/creator';
import { View, Text } from 'react-native';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/utils/nativewind-utils';
import React from 'react';
import { cssInterop } from 'nativewind';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import { PrimitiveIcon, UIIcon } from '@gluestack-ui/core/icon/creator';

const SCOPE = 'ALERT';

const alertStyle = tva({
  base: 'items-center py-3 px-4 rounded-md flex-row gap-2 border-outline-100',

  variants: {
    action: {
      error: 'bg-background-error',
      warning: 'bg-background-warning',
      success: 'bg-background-success',
      info: 'bg-background-info',
      muted: 'bg-background-muted',
    },

    variant: {
      solid: '',
      outline: 'border bg-background-0',
    },
  },
});

const alertTextStyle = tva({
  base: 'font-normal font-body',

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
      'md': 'text-base',
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
  parentVariants: {
    action: {
      error: 'text-error-800',
      warning: 'text-warning-800',
      success: 'text-success-800',
      info: 'text-info-800',
      muted: 'text-background-800',
    },
  },
});

const alertIconStyle = tva({
  base: 'fill-none',
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
  parentVariants: {
    action: {
      error: 'text-error-800',
      warning: 'text-warning-800',
      success: 'text-success-800',
      info: 'text-info-800',
      muted: 'text-background-800',
    },
  },
});

export const UIAlert = createAlert({
  Root: withStyleContext(View, SCOPE),
  Text: Text,
  Icon: UIIcon,
});

cssInterop(PrimitiveIcon, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: true,
      width: true,
      fill: true,
      color: 'classNameColor',
      stroke: true,
    },
  },
});

type IAlertProps = Omit<
  React.ComponentPropsWithoutRef<typeof UIAlert>,
  'context'
> &
  VariantProps<typeof alertStyle>;

const Alert = React.forwardRef<React.ComponentRef<typeof UIAlert>, IAlertProps>(
  function Alert(
    { className, variant = 'solid', action = 'muted', ...props },
    ref
  ) {
    return (
      <UIAlert
        className={alertStyle({ action, variant, class: className })}
        context={{ variant, action }}
        ref={ref}
        {...props}
      />
    );
  }
);

type IAlertTextProps = React.ComponentPropsWithoutRef<typeof UIAlert.Text> &
  VariantProps<typeof alertTextStyle>;

const AlertText = React.forwardRef<
  React.ComponentRef<typeof UIAlert.Text>,
  IAlertTextProps
>(function AlertText(
  {
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
  },
  ref
) {
  const { action: parentAction } = useStyleContext(SCOPE);
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
        parentVariants: {
          action: parentAction,
        },
      })}
      {...props}
      ref={ref}
    />
  );
});

type IAlertIconProps = React.ComponentPropsWithoutRef<typeof UIAlert.Icon> &
  VariantProps<typeof alertIconStyle> & {
    height?: number;
    width?: number;
  };

const AlertIcon = React.forwardRef<
  React.ComponentRef<typeof UIAlert.Icon>,
  IAlertIconProps
>(function AlertIcon({ className, size = 'md', ...props }, ref) {
  const { action: parentAction } = useStyleContext(SCOPE);

  if (typeof size === 'number') {
    return (
      <UIAlert.Icon
        ref={ref}
        {...props}
        className={alertIconStyle({ class: className })}
        size={size}
      />
    );
  } else if (
    (props.height !== undefined || props.width !== undefined) &&
    size === undefined
  ) {
    return (
      <UIAlert.Icon
        ref={ref}
        {...props}
        className={alertIconStyle({ class: className })}
      />
    );
  }
  return (
    <UIAlert.Icon
      className={alertIconStyle({
        parentVariants: {
          action: parentAction,
        },
        size,
        class: className,
      })}
      {...props}
      ref={ref}
    />
  );
});

Alert.displayName = 'Alert';
AlertText.displayName = 'AlertText';
AlertIcon.displayName = 'AlertIcon';

export { Alert, AlertText, AlertIcon };
