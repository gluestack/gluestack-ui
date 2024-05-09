'use client';
import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import { Svg } from 'react-native-svg';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import { cssInterop } from 'nativewind';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
const SCOPE = 'BADGE';

const badgeStyle = tva({
  base: 'flex-row items-center rounded-sm data-[disabled=true]:opacity-50 px-2 py-1',

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
    size: {
      sm: '',
      md: '',
      lg: '',
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
      muted: 'text-secondary-600',
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
  parentVariants: {
    size: {
      sm: 'h-3 w-3',
      md: 'h-3.5 w-3.5',
      lg: 'h-4 w-4',
    },
  },
});

const PrimitiveIcon = React.forwardRef(
  (
    { height, width, fill = 'none', color, size, as: AsComp, ...props }: any,
    ref?: any
  ) => {
    const sizeProps = useMemo(() => {
      return size ? { size } : { height, width };
    }, [size, height, width]);

    if (AsComp) {
      return (
        <AsComp ref={ref} fill={fill} color={color} {...props} {...sizeProps} />
      );
    }
    return (
      <Svg
        ref={ref}
        height={height}
        width={width}
        fill={fill}
        color={color}
        {...props}
      />
    );
  }
);

const ContextView = withStyleContext(View, SCOPE);
cssInterop(ContextView, { className: 'style' });
cssInterop(PrimitiveIcon, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: 'height',
      width: 'width',
      //@ts-ignore
      fill: 'fill',
      color: 'color',
    },
  },
});

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
  const { size: parentSize, action: parentAction } = useStyleContext(SCOPE);
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

interface DefaultColors {
  info: string;
  success: string;
  error: string;
  warning: string;
  muted: string;
}
const defaultColors: DefaultColors = {
  info: '#0B8DCD',
  success: '#2A7948',
  error: '#DC2626',
  warning: '#D76C1F',
  muted: '#515252',
};
type IBadgeIconProps = React.ComponentProps<typeof View> &
  VariantProps<typeof badgeIconStyle>;
const BadgeIcon = React.forwardRef(
  (
    {
      className,
      size,
      ...props
    }: { className?: string; color?: string; as?: any } & IBadgeIconProps,
    ref?: any
  ) => {
    const { size: parentSize, action: parentAction } = useStyleContext(SCOPE);
    const { color = defaultColors[parentAction as keyof DefaultColors] } =
      props;

    if (typeof size === 'number') {
      return (
        <PrimitiveIcon
          ref={ref}
          {...props}
          color={color}
          className={badgeIconStyle({ class: className })}
          size={size}
        />
      );
    } else if (
      (props?.height !== undefined || props?.width !== undefined) &&
      size === undefined
    ) {
      return (
        <PrimitiveIcon
          ref={ref}
          {...props}
          color={color}
          className={badgeIconStyle({ class: className })}
        />
      );
    }
    return (
      <PrimitiveIcon
        className={badgeIconStyle({
          parentVariants: {
            size: parentSize,
          },
          size,
          class: className,
        })}
        {...props}
        color={color}
        ref={ref}
      />
    );
  }
);

Badge.displayName = 'Badge';
BadgeText.displayName = 'BadgeText';
BadgeIcon.displayName = 'BadgeIcon';

export { Badge, BadgeIcon, BadgeText };
