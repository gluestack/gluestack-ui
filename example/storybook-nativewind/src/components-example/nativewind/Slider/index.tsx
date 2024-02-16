import { createSlider } from '@gluestack-ui/slider';
import { Pressable } from 'react-native';
import { View, Platform } from 'react-native';
import React from 'react';
import {
  tva,
  withStyleContext,
  withStyleContextAndStates,
  useStyleContext,
  withStates,
} from '@gluestack-ui/nativewind-utils';
import { cssInterop } from 'nativewind';

export const UISlider = createSlider({
  // @ts-ignore
  Root:
    Platform.OS === 'web'
      ? withStyleContext(View)
      : withStyleContextAndStates(View),
  Thumb: Platform.OS === 'web' ? View : withStates(View),
  Track: Pressable,
  FilledTrack: Platform.OS === 'web' ? View : withStates(View),
  ThumbInteraction: View,
});

//@ts-ignore
cssInterop(UISlider, { className: 'style' });
cssInterop(UISlider.Thumb, { className: 'style' });
cssInterop(UISlider.Track, { className: 'style' });
cssInterop(UISlider.FilledTrack, { className: 'style' });

const sliderStyle = tva({
  base: 'justify-center items-center data-[disabled=true]:web:cursor-not-allowed data-[disabled=true]:web:opacity-40 data-[disabled=true]:web:pointer-events-auto',

  variants: {
    orientation: {
      horizontal: 'w-full',
      vertical: 'h-full',
    },
    isReversed: {
      true: '',
      false: '',
    },
  },
});

const sliderThumbStyle = tva({
  base: 'bg-primary-500 absolute rounded-full focus:bg-primary-600 active:bg-primary-600 hover:bg-primary-600 data-[disabled=true]:bg-primary-500 web:cursor-pointer web:active:outline-4 web:active:outline web:active:outline-primary-400 web:focus:outline-4 web:focus:outline web:focus:outline-primary-400 shadow',

  parentVariants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
    },
  },
});

const sliderTrackStyle = tva({
  base: 'bg-background-300 rounded-lg overflow-hidden',
  variants: {
    variant: {
      horizontal: 'w-full',
      vertical: 'h-full',
    },
  },
  parentVariants: {
    orientation: {
      horizontal: 'w-full',
      vertical: 'h-full',
    },
  },
  parentCompoundVariants: [
    {
      orientation: 'horizontal',
      size: 'sm',
      class: 'h-1 flex-row',
    },
    {
      orientation: 'horizontal',
      size: 'sm',
      isReversed: true,
      class: 'h-1 flex-row-reverse',
    },
    {
      orientation: 'horizontal',
      size: 'md',
      class: 'h-[5px] flex-row',
    },
    {
      orientation: 'horizontal',
      size: 'md',
      isReversed: true,
      class: 'h-[5px] flex-row-reverse',
    },
    {
      orientation: 'horizontal',
      size: 'lg',
      class: 'h-1.5 flex-row',
    },
    {
      orientation: 'horizontal',
      size: 'lg',
      isReversed: true,
      class: 'h-1.5 flex-row-reverse',
    },
    {
      orientation: 'vertical',
      size: 'sm',
      class: 'w-1 flex-col-reverse',
    },
    {
      orientation: 'vertical',
      size: 'sm',
      isReversed: true,
      class: 'w-1 flex-col',
    },
    {
      orientation: 'vertical',
      size: 'md',
      class: 'w-[5px] flex-col-reverse',
    },
    {
      orientation: 'vertical',
      size: 'md',
      isReversed: true,
      class: 'w-[5px] flex-col',
    },
    {
      orientation: 'vertical',
      size: 'lg',
      class: 'w-1.5 flex-col-reverse',
    },
    {
      orientation: 'vertical',
      size: 'lg',
      isReversed: true,
      class: 'w-1.5 flex-col',
    },
  ],
});

const sliderFilledTrackStyle = tva({
  base: 'bg-primary-500 focus:bg-primary-600 active:bg-primary-600 hover:bg-primary-600',
  parentVariants: {
    orientation: {
      horizontal: 'h-full',
      vertical: 'w-full',
    },
  },
});

// const sliderThumbInteractionStyle = tva({
//   base: 'rounded-full -z-10',
// });

export const Slider = React.forwardRef(
  (
    {
      className,
      size = 'md',
      orientation = 'horizontal',
      isReversed = false,
      ...props
    }: any,
    ref
  ) => {
    return (
      <UISlider
        ref={ref}
        {...props}
        className={sliderStyle({
          size,
          orientation,
          isReversed,
          class: className,
        })}
        context={{ size, orientation, isReversed }}
      />
    );
  }
);

export const SliderThumb = React.forwardRef(
  ({ className, size, ...props }: any, ref) => {
    const {
      orientation: parentOrientation,
      size: parentSize,
      isReversed,
    } = useStyleContext();

    return (
      <UISlider.Thumb
        ref={ref}
        {...props}
        className={sliderThumbStyle({
          parentVariants: {
            orientation: parentOrientation,
            size: parentSize,
            isReversed,
          },
          size,
          class: className,
        })}
      />
    );
  }
);

export const SliderTrack = React.forwardRef(
  ({ className, ...props }: any, ref) => {
    const {
      orientation: parentOrientation,
      size: parentSize,
      isReversed,
    } = useStyleContext();

    return (
      <UISlider.Track
        ref={ref}
        {...props}
        className={sliderTrackStyle({
          parentVariants: {
            orientation: parentOrientation,
            size: parentSize,
            isReversed,
          },
          class: className,
        })}
      />
    );
  }
);

export const SliderFilledTrack = React.forwardRef(
  ({ className, ...props }: any, ref) => {
    const {
      orientation: parentOrientation,
      size: parentSize,
      isReversed,
    } = useStyleContext();

    return (
      <UISlider.FilledTrack
        ref={ref}
        {...props}
        className={sliderFilledTrackStyle({
          parentVariants: {
            orientation: parentOrientation,
            size: parentSize,
            isReversed,
          },
          class: className,
        })}
      />
    );
  }
);
