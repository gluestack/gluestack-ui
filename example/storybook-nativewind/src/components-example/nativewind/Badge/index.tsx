import React from 'react';
import { Text, View } from 'react-native';
import {
  tva,
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils';
import { cssInterop } from 'nativewind';

const badgeStyle = tva({
  base: 'flex-row items-center rounded-xs data-[disabled=true]:opacity-50 px-2',

  variants: {
    action: {
      error: 'bg-background-error border-error-300',
      warning: 'bg-background-warning border-warning-300',
      success: 'bg-background-success border-success-300',
      info: 'bg-background-info border-info-300',
      muted: 'bg-background-muted border-secondary-300',
    },
    variant: {
      solid: '',
      outline: 'border',
    },
  },
});

const badgeTextStyle = tva({
  base: 'text-typography-700 font-body font-normal tracking-normal uppercase',

  parentVariants: {
    action: {
      error: 'text-error-600',
      warning: 'text-warning-600',
      success: 'text-success-600',
      info: 'text-info-600',
      muted: 'text-muted-600',
    },
  },
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

const badgeIconStyle = tva({
  base: 'text-background-500',
  parentVariants: {
    action: {
      error: 'text-error-600',
      warning: 'text-warning-600',
      success: 'text-success-600',
      info: 'text-info-600',
      muted: 'text-muted-600',
    },
  },
  variants: {
    size: {
      '2xs': 'h-3 w-3',
      'xs': 'h-3.5 w-3.5',
      'sm': 'h-4 w-4',
      'md': 'h-4.5 w-4.5',
      'lg': 'h-5 w-5',
      'xl': 'h-6 w-6',
    },
  },
});

const ContextView = withStyleContext(View);

cssInterop(ContextView, { className: 'style' });

const Badge = ({
  children,
  action = 'info',
  variant = 'solid',
  size = 'md',
  className,
  ...props
}: any) => {
  return (
    <ContextView
      className={badgeStyle({ action, variant, class: className })}
      {...props}
      context={{
        action,
        variant,
        size,
      }}
    >
      {children}
    </ContextView>
  );
};

const BadgeText = ({ children, className, size, ...props }: any) => {
  const { size: parentSize, action } = useStyleContext();
  return (
    <Text
      className={badgeTextStyle({
        parentVariants: {
          size: parentSize,
          action,
        },
        size,
        class: className,
      })}
      {...props}
    >
      {children}
    </Text>
  );
};

const BadgeIcon = ({ className, size, as: AsComp, ...props }: any) => {
  const { size: parentSize, action } = useStyleContext();
  if (AsComp) {
    return (
      <AsComp
        className={badgeIconStyle({
          parentVariants: {
            size: parentSize,
            action,
          },
          size,
          class: className,
        })}
        {...props}
      />
    );
  }
  return (
    <View
      className={badgeIconStyle({
        parentVariants: {
          size: parentSize,
          action,
        },
        size,
        class: className,
      })}
      {...props}
    />
  );
};

Badge.displayName = 'Badge';
BadgeText.displayName = 'BadgeText';
BadgeIcon.displayName = 'BadgeIcon';

export { Badge, BadgeIcon, BadgeText };
