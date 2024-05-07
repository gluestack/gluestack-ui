'use client';
import React from 'react';
import { createTooltip } from '@gluestack-ui/tooltip';
import { View, Text, Platform } from 'react-native';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { withStyleContext } from '@gluestack-ui/nativewind-utils/withStyleContext';
import { cssInterop } from '@gluestack-ui/nativewind-utils/cssInterop';
import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates';

import { Motion, AnimatePresence } from '@legendapp/motion';

export const UITooltip = createTooltip({
  Root:
    Platform.OS === 'web'
      ? withStyleContext(View)
      : withStyleContextAndStates(View),
  Content: Motion.View,
  Text: Text,
  AnimatePresence: AnimatePresence,
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

cssInterop(UITooltip, { className: 'style' });
cssInterop(UITooltip.Content, { className: 'style' });
cssInterop(UITooltip.Text, { className: 'style' });

type ITooltipProps = React.ComponentProps<typeof UITooltip> &
  VariantProps<typeof tooltipStyle>;
type ITooltipContentProps = React.ComponentProps<typeof UITooltip.Content> &
  VariantProps<typeof tooltipContentStyle>;
type ITooltipTextProps = React.ComponentProps<typeof UITooltip.Text> &
  VariantProps<typeof tooltipTextStyle>;

export const Tooltip = React.forwardRef(
  (
    { className, ...props }: { className?: string } & ITooltipProps,
    ref?: any
  ) => {
    return (
      <UITooltip
        ref={ref}
        className={tooltipStyle({ class: className })}
        {...props}
      />
    );
  }
);

export const TooltipContent = React.forwardRef(
  (
    { className, ...props }: { className?: string } & ITooltipContentProps,
    ref?: any
  ) => {
    return (
      <UITooltip.Content
        ref={ref}
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          type: 'spring',
          damping: 18,
          stiffness: 50,
          opacity: {
            type: 'timing',
            duration: 250,
          },
        }}
        {...props}
        className={tooltipContentStyle({
          class: className,
        })}
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
    ref?: any
  ) => {
    return (
      <UITooltip.Text
        ref={ref}
        className={tooltipTextStyle({ size, class: className })}
        {...props}
      />
    );
  }
);
