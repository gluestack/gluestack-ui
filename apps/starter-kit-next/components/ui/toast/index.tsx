'use client';
import { createToastHook } from '@gluestack-ui/core/toast/creator';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import { tva, useStyleContext, withStyleContext } from '@gluestack-ui/utils/nativewind-utils';
import { cssInterop } from 'nativewind';
import React from 'react';
import { AccessibilityInfo, Text, View } from 'react-native';
import Animated, { SlideInUp } from 'react-native-reanimated';
const useToast = createToastHook(View);
const SCOPE = 'TOAST';
const AnimatedView = Animated.createAnimatedComponent(View);
cssInterop(AnimatedView, { className: 'style' });
const toastStyle = tva({
  base: 'p-4 m-1 rounded-md gap-1 web:pointer-events-auto border-border',
  variants: {
    action: {
      error: 'bg-popover text-popover-foreground',
      warning: 'bg-popover text-popover-foreground',
      success: 'bg-popover text-popover-foreground',
      info: 'bg-popover text-popover-foreground',
      muted: 'bg-popover text-popover-foreground',
    },

    variant: {
      solid: 'border border-border bg-popover shadow-soft-4',
      outline: 'border border-border bg-popover',
    },
  },
});

const toastTitleStyle = tva({
  base: 'font-medium font-body tracking-md text-left',
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
      outline: 'text-foreground',
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
      variant: 'solid',
      action: 'error',
      class: 'text-destructive-foreground',
    },
    {
      variant: 'solid',
      action: 'warning',
      class: 'text-accent-foreground',
    },
    {
      variant: 'solid',
      action: 'success',
      class: 'text-secondary-foreground',
    },
    {
      variant: 'solid',
      action: 'info',
      class: 'text-popover-foreground',
    },
    {
      variant: 'solid',
      action: 'muted',
      class: 'text-muted-foreground',
    },
    {
      variant: 'outline',
      action: 'error',
      class: 'text-destructive',
    },
    {
      variant: 'outline',
      action: 'warning',
      class: 'text-accent-foreground',
    },
    {
      variant: 'outline',
      action: 'success',
      class: 'text-secondary-foreground',
    },
    {
      variant: 'outline',
      action: 'info',
      class: 'text-popover-foreground',
    },
    {
      variant: 'outline',
      action: 'muted',
      class: 'text-muted-foreground',
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
      solid: 'text-muted-foreground',
      outline: 'text-muted-foreground',
    },
  },
});

const Root = withStyleContext(AnimatedView, SCOPE);
type IToastProps = React.ComponentProps<typeof Root> & {
  className?: string;
} & VariantProps<typeof toastStyle>;

const Toast = React.forwardRef<React.ComponentRef<typeof Root>, IToastProps>(
  function Toast(
    { className, variant = 'solid', action = 'muted', ...props },
    ref
  ) {
    return (
      <Root
        ref={ref}
        entering={SlideInUp}
        className={toastStyle({ variant, action, class: className })}
        context={{ variant, action }}
        {...props}
      />
    );
  }
);

type IToastTitleProps = React.ComponentProps<typeof Text> & {
  className?: string;
} & VariantProps<typeof toastTitleStyle>;

const ToastTitle = React.forwardRef<
  React.ComponentRef<typeof Text>,
  IToastTitleProps
>(function ToastTitle({ className, size = 'md', children, ...props }, ref) {
  const { variant: parentVariant, action: parentAction } =
    useStyleContext(SCOPE);
  React.useEffect(() => {
    // Issue from react-native side
    // Hack for now, will fix this later
    AccessibilityInfo.announceForAccessibility(children as string);
  }, [children]);

  return (
    <Text
      {...props}
      ref={ref}
      aria-live="assertive"
      aria-atomic="true"
      role="alert"
      className={toastTitleStyle({
        size,
        class: className,
        parentVariants: {
          variant: parentVariant,
          action: parentAction,
        },
      })}
    >
      {children}
    </Text>
  );
});

type IToastDescriptionProps = React.ComponentProps<typeof Text> & {
  className?: string;
} & VariantProps<typeof toastDescriptionStyle>;

const ToastDescription = React.forwardRef<
  React.ComponentRef<typeof Text>,
  IToastDescriptionProps
>(function ToastDescription({ className, size = 'md', ...props }, ref) {
  const { variant: parentVariant } = useStyleContext(SCOPE);
  return (
    <Text
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

Toast.displayName = 'Toast';
ToastTitle.displayName = 'ToastTitle';
ToastDescription.displayName = 'ToastDescription';

export { Toast, ToastDescription, ToastTitle, useToast };

