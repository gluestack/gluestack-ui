'use client';
import React from 'react';
import { createTooltip } from '@gluestack-ui/tooltip';
import { View, Text } from 'react-native';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { withStyleContext } from '@gluestack-ui/nativewind-utils/withStyleContext';
import { Motion, AnimatePresence } from '@legendapp/motion';
import { cssInterop } from 'nativewind';
export const UITooltip = createTooltip({
  Root: withStyleContext(View),
  Content: Motion.View,
  Text: Text,
  AnimatePresence: AnimatePresence,
});

cssInterop(Motion.View, { className: 'style' });

const tooltipStyle = tva({
  base: 'w-full h-full web:pointer-events-none',
});

const tooltipContentStyle = tva({
  base: 'py-1 px-3 rounded-sm bg-background-900 web:pointer-events-auto',
});

const tooltipTextStyle = tva({
  base: 'font-normal tracking-normal web:select-none text-xs text-typography-50',

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
  VariantProps<typeof tooltipStyle> & { className?: string };
type ITooltipContentProps = React.ComponentProps<typeof UITooltip.Content> &
  VariantProps<typeof tooltipContentStyle> & { className?: string };
type ITooltipTextProps = React.ComponentProps<typeof UITooltip.Text> &
  VariantProps<typeof tooltipTextStyle> & { className?: string };

const Tooltip = React.forwardRef<
  React.ElementRef<typeof UITooltip>,
  ITooltipProps
>(({ className, ...props }, ref) => {
  return (
    <UITooltip
      ref={ref}
      className={tooltipStyle({ class: className })}
      {...props}
    />
  );
});

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof UITooltip.Content>,
  ITooltipContentProps & { className?: string }
>(({ className, ...props }, ref) => {
  return (
    <UITooltip.Content
      ref={ref}
      {...props}
      className={tooltipContentStyle({
        class: className,
      })}
      pointerEvents="auto"
    />
  );
});

const TooltipText = React.forwardRef<
  React.ElementRef<typeof UITooltip.Text>,
  ITooltipTextProps & { className?: string }
>(({ size, className, ...props }, ref) => {
  return (
    <UITooltip.Text
      ref={ref}
      className={tooltipTextStyle({ size, class: className })}
      {...props}
    />
  );
});

export { Tooltip, TooltipContent, TooltipText };
