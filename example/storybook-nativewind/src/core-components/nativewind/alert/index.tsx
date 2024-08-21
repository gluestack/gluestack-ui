'use client';
import { createAlert } from '@gluestack-ui/alert';
import { View, Text } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import React, { useMemo } from 'react';
import { Svg } from 'react-native-svg';
import { cssInterop } from 'nativewind';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

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
  base: 'flex-1 font-normal font-body',

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
      muted: 'text-secondary-800',
    },
  },
});

type IPrimitiveIcon = React.ComponentPropsWithoutRef<typeof Svg> & {
  height?: number | string;
  width?: number | string;
  fill?: string;
  color?: string;
  size?: number | string;
  stroke?: string;
  as?: React.ElementType;
  className?: string;
};

const PrimitiveIcon = React.forwardRef<
  React.ElementRef<typeof Svg>,
  IPrimitiveIcon
>(({ height, width, fill, color, size, stroke, as: AsComp, ...props }, ref) => {
  const sizeProps = useMemo(() => {
    if (size) return { size };
    if (height && width) return { height, width };
    if (height) return { height };
    if (width) return { width };
    return {};
  }, [size, height, width]);

  let colorProps = {};
  if (color) {
    colorProps = { ...colorProps, color: color };
  }
  if (stroke) {
    colorProps = { ...colorProps, stroke: stroke };
  }
  if (fill) {
    colorProps = { ...colorProps, fill: fill };
  }
  if (AsComp) {
    return <AsComp ref={ref} {...sizeProps} {...colorProps} {...props} />;
  }
  return (
    <Svg ref={ref} height={height} width={width} {...colorProps} {...props} />
  );
});

const IconWrapper = React.forwardRef<
  React.ElementRef<typeof PrimitiveIcon>,
  IPrimitiveIcon
>(({ ...props }, ref) => {
  return <PrimitiveIcon {...props} ref={ref} />;
});

export const UIAlert = createAlert({
  Root: withStyleContext(View, SCOPE),
  Text: Text,
  Icon: IconWrapper,
});

cssInterop(UIAlert, { className: 'style' });
//@ts-ignore
cssInterop(UIAlert.Text, { className: 'style' });
cssInterop(IconWrapper, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: true,
      width: true,
      // @ts-ignore
      fill: true,
      color: true,
      stroke: true,
    },
  },
});

type IAlertProps = Omit<
  React.ComponentPropsWithoutRef<typeof UIAlert>,
  'context'
> &
  VariantProps<typeof alertStyle>;

const Alert = React.forwardRef<React.ElementRef<typeof UIAlert>, IAlertProps>(
  ({ className, variant = 'solid', action = 'muted', ...props }, ref) => {
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
  React.ElementRef<typeof UIAlert.Text>,
  IAlertTextProps
>(
  (
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
  ) => {
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
  }
);

type IAlertIconProps = React.ComponentPropsWithoutRef<typeof UIAlert.Icon> &
  VariantProps<typeof alertIconStyle>;

const AlertIcon = React.forwardRef<
  React.ElementRef<typeof UIAlert.Icon>,
  IAlertIconProps
>(({ className, size = 'md', ...props }, ref) => {
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
