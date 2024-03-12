import React from 'react';
import { Text, View, Platform } from 'react-native';
import {
  tva,
  withStyleContext,
  withStyleContextAndStates,
  useStyleContext,
  cssInterop,
  VariantProps,
} from '@gluestack-ui/nativewind-utils';

const badgeStyle = tva({
  base: 'flex-row items-center rounded-sm data-[disabled=true]:opacity-50 px-2',

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
    size: {
      sm: 'text-2xs',
      md: 'text-xs',
      lg: 'text-sm',
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
    size: {
      sm: 'h-3 w-3',
      md: 'h-3.5 w-3.5',
      lg: 'h-4 w-4',
    },
  },
});

const ContextView =
  Platform.OS === 'web'
    ? withStyleContext(View)
    : withStyleContextAndStates(View);

cssInterop(ContextView, { className: 'style' });

type IBadgeProps = React.ComponentProps<typeof ContextView> &
  VariantProps<typeof badgeStyle>;
const Badge = ({
  children,
  action = 'info',
  variant = 'solid',
  size = 'md',
  className,
  ...props
}: { className?: string } & IBadgeProps) => {
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

type IBadgeTextProps = React.ComponentProps<typeof Text> &
  VariantProps<typeof badgeTextStyle>;
const BadgeText = ({
  children,
  className,
  size,
  ...props
}: { className?: string } & IBadgeTextProps) => {
  const { size: parentSize, action: parentAction } = useStyleContext();
  return (
    <Text
      className={badgeTextStyle({
        parentVariants: {
          size: parentSize,
          action: parentAction,
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

type IBadgeIconProps = React.ComponentProps<typeof View> & {
  as?: any;
};
const BadgeIcon = ({
  className,
  size,
  as: AsComp,
  ...props
}: IBadgeIconProps & { className?: any }) => {
  const { size: parentSize, action: parentAction } = useStyleContext();
  if (AsComp) {
    return (
      <AsComp
        className={badgeIconStyle({
          parentVariants: {
            size: parentSize,
            action: parentAction,
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
          action: parentAction,
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
