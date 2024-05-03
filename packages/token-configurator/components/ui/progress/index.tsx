'use client';
import React from 'react';
import { createProgress } from '@gluestack-ui/progress';
import { View } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import { cssInterop } from '@gluestack-ui/nativewind-utils/cssInterop';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
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
    size: {
      'xs': 'h-1',
      'sm': 'h-2',
      'md': 'h-3',
      'lg': 'h-4',
      'xl': 'h-5',
      '2xl': 'h-6',
    },
  },
});
const progressFilledTrackStyle = tva({
  base: 'bg-primary-500 rounded-full',
  parentVariants: {
    size: {
      'xs': 'h-1',
      'sm': 'h-2',
      'md': 'h-3',
      'lg': 'h-4',
      'xl': 'h-5',
      '2xl': 'h-6',
    },
  },
});

type IProgressProps = VariantProps<typeof progressStyle> &
  React.ComponentProps<typeof UIProgress>;
type IProgressFilledTrackProps = VariantProps<typeof progressFilledTrackStyle> &
  React.ComponentProps<typeof UIProgress.FilledTrack>;

export const Progress = React.forwardRef(
  ({ className, size = 'md', ...props }: IProgressProps, ref?: any) => {
    return (
      <UIProgress
        ref={ref}
        {...props}
        className={progressStyle({ size, class: className })}
        context={{ size }}
      />
    );
  }
);

export const ProgressFilledTrack = React.forwardRef(
  ({ className, ...props }: IProgressFilledTrackProps, ref?: any) => {
    const { size: parentSize } = useStyleContext(SCOPE);

    return (
      <UIProgress.FilledTrack
        ref={ref}
        className={progressFilledTrackStyle({
          parentVariants: {
            size: parentSize,
          },
          class: className,
        })}
        {...props}
      />
    );
  }
);
