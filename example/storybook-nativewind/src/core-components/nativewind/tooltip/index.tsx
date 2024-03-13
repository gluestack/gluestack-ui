import React, { useEffect } from 'react';
import { createTooltip } from '@gluestack-ui/tooltip';
import { View, Text, Platform } from 'react-native';
import {
  tva,
  withStyleContext,
  withStyleContextAndStates,
  VariantProps,
} from '@gluestack-ui/nativewind-utils';
import Animated, {
  Easing,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { View, Text } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { withStyleContext } from '@gluestack-ui/nativewind-utils/withStyleContext';
import React from 'react';

export const UITooltip = createTooltip({
  Root:
    Platform.OS === 'web'
      ? withStyleContext(View)
      : withStyleContextAndStates(View),
  Content: Animated.View,
  Text: Text,
  AnimatePresence: React.Fragment, // TODO: Add support for this
});

const tooltipStyle = tva({
  base: 'w-full h-full web:pointer-events-none',
});

const tooltipContentStyle = tva({
  base: 'py-1 px-3 rounded-sm bg-background-900 web:pointer-events-auto',
});

const tooltipTextStyle = tva({
  base: 'font-normal tracking-normal text-red-400 web:select-none text-xs text-typography-50',

  variants: {
    isTruncated: {
      true: {
        props: 'line-clamp-1 truncate',
      },
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
});

type ITooltipProps = React.ComponentProps<typeof UITooltip> &
  VariantProps<typeof tooltipStyle>;
type ITooltipContentProps = React.ComponentProps<typeof UITooltip.Content> &
  VariantProps<typeof tooltipContentStyle>;
type ITooltipTextProps = React.ComponentProps<typeof UITooltip.Text> &
  VariantProps<typeof tooltipTextStyle>;

export const Tooltip = React.forwardRef(
  ({ className, ...props }: { className?: string } & ITooltipProps, ref) => {
    return (
      <UITooltip
        ref={ref}
        {...props}
        className={tooltipStyle({ class: className })}
      />
    );
  }
);

export const TooltipContent = React.forwardRef(
  (
    { className, ...props }: { className?: string } & ITooltipContentProps,
    ref
  ) => {
    const opacity = useSharedValue(0);
    const scale = useSharedValue(0.5);
    useEffect(() => {
      opacity.value = withTiming(1, {
        easing: Easing.linear,
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
      scale.value = withSpring(1, {
        damping: 18,
        stiffness: 250,
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
      <UITooltip.Content
        ref={ref}
        {...props}
        className={tooltipContentStyle({
          class: className,
        })}
        style={{
          opacity: opacity,
          transform: [{ scale: scale }],
        }}
        pointerEvents="auto"
      />
    );
  }
);

export const TooltipText = React.forwardRef(
  (
    {
      className,
      size = 'md',
      ...props
    }: { className?: string } & ITooltipTextProps,
    ref
  ) => {
    return (
      <UITooltip.Text
        ref={ref}
        {...props}
        className={tooltipTextStyle({ size, class: className })}
      />
    );
  }
);
