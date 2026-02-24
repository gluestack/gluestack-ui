'use client';
import { createAlert } from '@gluestack-ui/core/alert/creator';
import { View, Text, Platform } from 'react-native';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/utils/nativewind-utils';
import React from 'react';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import { UIIcon } from '@gluestack-ui/core/icon/creator';
import { styled } from 'nativewind';

const SCOPE = 'ALERT';

const alertStyle = tva({
  base: 'rounded-lg border px-2.5 py-2 flex-row gap-2 items-start ',
  variants: {
    variant: {
      default: 'bg-card border-border',
      destructive: 'bg-card border-destructive',
    },
  },
});

const alertTextStyle = tva({
  base: 'font-medium tracking-tight text-sm',
  parentVariants: {
    variant: {
      default: 'text-card-foreground',
      destructive: 'text-destructive',
    },
  },
});

const alertIconStyle = tva({
  base: 'fill-none w-4 h-4 mt-0.5',
  parentVariants: {
    variant: {
      default: 'text-card-foreground',
      destructive: 'text-destructive',
    },
  },
});

const StyledUIIcon = styled(UIIcon, {
  className: "style",
});
const styledAlertIcon = Platform.OS === 'web' ? UIIcon : StyledUIIcon;

export const UIAlert = createAlert({
  Root: withStyleContext(View, SCOPE),
  Text: Text,
  Icon: styledAlertIcon,
});

type IAlertProps = Omit<
  React.ComponentPropsWithoutRef<typeof UIAlert>,
  'context'
> &
  VariantProps<typeof alertStyle>;

const Alert = React.forwardRef<React.ComponentRef<typeof UIAlert>, IAlertProps>(
  function Alert({ className, variant = 'default', ...props }, ref) {
    return (
      <UIAlert
        className={alertStyle({ variant, class: className })}
        context={{ variant }}
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
>(function AlertText({ className, ...props }, ref) {
  const { variant: parentVariant } = useStyleContext(SCOPE);
  return (
    <UIAlert.Text
      className={alertTextStyle({
        class: className,
        parentVariants: {
          variant: parentVariant,
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
>(function AlertIcon({ className, ...props }, ref) {
  const { variant: parentVariant } = useStyleContext(SCOPE);
  return (
    <UIAlert.Icon
      className={alertIconStyle({
        parentVariants: {
          variant: parentVariant,
        },
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