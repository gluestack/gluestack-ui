'use client';
import { createSlider } from '@gluestack-ui/core/slider/creator';
import { Pressable } from 'react-native';
import { View } from 'react-native';
import React from 'react';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/utils/nativewind-utils';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import { cssInterop } from 'nativewind';

const SCOPE = 'SLIDER';
const Root = withStyleContext(View, SCOPE);
export const UISlider = createSlider({
  Root: Root,
  Thumb: View,
  Track: Pressable,
  FilledTrack: View,
  ThumbInteraction: View,
});

cssInterop(UISlider.Track, { className: 'style' });

const sliderStyle = tva({
  base: 'justify-center items-center data-[disabled=true]:opacity-40 data-[disabled=true]:web:pointer-events-none',
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
  base: 'bg-white border border-primary ring-ring/50 absolute rounded-full shadow-sm transition-[color,box-shadow] data-[hover=true]:ring-4 data-[focus-visible=true]:ring-4 data-[focus-visible=true]:outline-hidden disabled:pointer-events-none disabled:opacity-50 web:cursor-pointer h-4 w-4',
});

const sliderTrackStyle = tva({
  base: 'bg-muted rounded-full overflow-hidden',
  parentVariants: {
    orientation: {
      horizontal: 'w-full h-1.5 flex-row',
      vertical: 'h-full w-1.5 flex-col-reverse',
    },
    isReversed: {
      true: '',
      false: '',
    },
  },
  parentCompoundVariants: [
    {
      orientation: 'horizontal',
      isReversed: true,
      class: 'flex-row-reverse',
    },
    {
      orientation: 'vertical',
      isReversed: true,
      class: 'flex-col',
    },
  ],
});

const sliderFilledTrackStyle = tva({
  base: 'bg-primary',
  parentVariants: {
    orientation: {
      horizontal: 'h-full',
      vertical: 'w-full',
    },
  },
});

type ISliderProps = React.ComponentProps<typeof UISlider> &
  VariantProps<typeof sliderStyle>;

const Slider = React.forwardRef<
  React.ComponentRef<typeof UISlider>,
  ISliderProps
>(function Slider(
  {
    className,
    orientation = 'horizontal',
    isReversed = false,
    ...props
  },
  ref
) {
  return (
    <UISlider
      ref={ref}
      isReversed={isReversed}
      orientation={orientation}
      {...props}
      className={sliderStyle({
        orientation,
        isReversed,
        class: className,
      })}
      context={{ orientation, isReversed }}
    />
  );
});

type ISliderThumbProps = React.ComponentProps<typeof UISlider.Thumb> &
  VariantProps<typeof sliderThumbStyle>;

const SliderThumb = React.forwardRef<
  React.ComponentRef<typeof UISlider.Thumb>,
  ISliderThumbProps
>(function SliderThumb({ className, ...props }, ref) {
  return (
    <UISlider.Thumb
      ref={ref}
      {...props}
      className={sliderThumbStyle({
        class: className,
      })}
    />
  );
});

type ISliderTrackProps = React.ComponentProps<typeof UISlider.Track> &
  VariantProps<typeof sliderTrackStyle>;

const SliderTrack = React.forwardRef<
  React.ComponentRef<typeof UISlider.Track>,
  ISliderTrackProps
>(function SliderTrack({ className, ...props }, ref) {
  const {
    orientation: parentOrientation,
    isReversed,
  } = useStyleContext(SCOPE);

  return (
    <UISlider.Track
      ref={ref}
      {...props}
      className={sliderTrackStyle({
        parentVariants: {
          orientation: parentOrientation,
          isReversed,
        },
        class: className,
      })}
    />
  );
});

type ISliderFilledTrackProps = React.ComponentProps<
  typeof UISlider.FilledTrack
> &
  VariantProps<typeof sliderFilledTrackStyle>;

const SliderFilledTrack = React.forwardRef<
  React.ComponentRef<typeof UISlider.FilledTrack>,
  ISliderFilledTrackProps
>(function SliderFilledTrack({ className, ...props }, ref) {
  const { orientation: parentOrientation } = useStyleContext(SCOPE);

  return (
    <UISlider.FilledTrack
      ref={ref}
      {...props}
      className={sliderFilledTrackStyle({
        parentVariants: {
          orientation: parentOrientation,
        },
        class: className,
      })}
    />
  );
});

export { Slider, SliderThumb, SliderTrack, SliderFilledTrack };
