import React from 'react';
import { createProgress } from '@gluestack-ui/progress';
import { View } from 'react-native';
import {
  tva,
  // withStyleContextAndStates,
  useStyleContext,
  withStyleContext,
} from '@gluestack-ui/nativewind-utils';
import { cssInterop } from 'nativewind';

export const UIProgress = createProgress({
  Root: withStyleContext(View),
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
  defaultVariants: {
    size: 'md',
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

export const Progress = React.forwardRef(
  ({ className, size = 'md', ...props }: any, ref) => {
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
  ({ className, size, ...props }: any, ref) => {
    const { size: parentSize } = useStyleContext();

    return (
      <UIProgress.FilledTrack
        ref={ref}
        {...props}
        className={progressFilledTrackStyle({
          parentVariants: {
            size: parentSize,
          },
          size,
          class: className,
        })}
      />
    );
  }
);
