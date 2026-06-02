'use client';
import React from 'react';
import { createProgress } from '@gluestack-ui/core/progress/creator';
import { View } from 'react-native';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/utils/nativewind-utils';
import { cssInterop } from 'nativewind';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';

const SCOPE = 'PROGRESS';
export const UIProgress = createProgress({
  Root: withStyleContext(View, SCOPE),
  FilledTrack: View,
});

cssInterop(UIProgress, { className: 'style' });
cssInterop(UIProgress.FilledTrack, { className: 'style' });

const progressStyle = tva({
  base: 'bg-background-300 rounded-full w-full',
  variants: {
    orientation: {
      horizontal: 'w-full',
      vertical: 'h-full',
    },
    size: {
      'xs': 'h-1',
      'sm': 'h-2',
      'md': 'h-3',
      'lg': 'h-4',
      'xl': 'h-5',
      '2xl': 'h-6',
    },
  },
  compoundVariants: [
    {
      orientation: 'vertical',
      size: 'xs',
      class: 'h-full w-1 justify-end',
    },
    {
      orientation: 'vertical',
      size: 'sm',
      class: 'h-full w-2 justify-end',
    },
    {
      orientation: 'vertical',
      size: 'md',
      class: 'h-full w-3 justify-end',
    },
    {
      orientation: 'vertical',
      size: 'lg',
      class: 'h-full w-4 justify-end',
    },

    {
      orientation: 'vertical',
      size: 'xl',
      class: 'h-full w-5 justify-end',
    },
    {
      orientation: 'vertical',
      size: '2xl',
      class: 'h-full w-6 justify-end',
    },
  ],
});

const progressFilledTrackStyle = tva({
  base: 'bg-primary-500 rounded-full',
  parentVariants: {
    orientation: {
      horizontal: 'w-full',
      vertical: 'h-full',
    },
    size: {
      'xs': 'h-1',
      'sm': 'h-2',
      'md': 'h-3',
      'lg': 'h-4',
      'xl': 'h-5',
      '2xl': 'h-6',
    },
  },
  parentCompoundVariants: [
    {
      orientation: 'vertical',
      size: 'xs',
      class: 'h-full w-1',
    },
    {
      orientation: 'vertical',
      size: 'sm',
      class: 'h-full w-2',
    },
    {
      orientation: 'vertical',
      size: 'md',
      class: 'h-full w-3',
    },
    {
      orientation: 'vertical',
      size: 'lg',
      class: 'h-full w-4',
    },

    {
      orientation: 'vertical',
      size: 'xl',
      class: 'h-full w-5',
    },
    {
      orientation: 'vertical',
      size: '2xl',
      class: 'h-full w-6',
    },
  ],
});

type IProgressProps = VariantProps<typeof progressStyle> &
  React.ComponentProps<typeof UIProgress>;
type IProgressFilledTrackProps = VariantProps<typeof progressFilledTrackStyle> &
  React.ComponentProps<typeof UIProgress.FilledTrack>;

const Progress = React.forwardRef<
  React.ComponentRef<typeof UIProgress>,
  IProgressProps
>(function Progress(
  { className, size = 'md', orientation = 'horizontal', ...props },
  ref
) {
  return (
    <UIProgress
      ref={ref}
      {...props}
      className={progressStyle({ size, orientation, class: className })}
      context={{ size, orientation }}
      orientation={orientation}
    />
  );
});

const ProgressFilledTrack = React.forwardRef<
  React.ComponentRef<typeof UIProgress.FilledTrack>,
  IProgressFilledTrackProps
>(function ProgressFilledTrack({ className, ...props }, ref) {
  const { size: parentSize, orientation: parentOrientation } =
    useStyleContext(SCOPE);

  return (
    <UIProgress.FilledTrack
      ref={ref}
      className={progressFilledTrackStyle({
        parentVariants: {
          size: parentSize,
          orientation: parentOrientation,
        },
        class: className,
      })}
      {...props}
    />
  );
});

export { Progress, ProgressFilledTrack };
