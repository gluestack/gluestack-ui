'use client';
import { createSlider } from '@gluestack-ui/slider';
import { Pressable } from 'react-native';
import { View, Platform } from 'react-native';
import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates';
import { cssInterop } from 'nativewind';
import { withStates } from '@gluestack-ui/nativewind-utils/withStates';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

const ThumbWrapper = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentProps<typeof View>
>((props, ref) => <View ref={ref} {...props} />);

const FilledTrackWrapper = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentProps<typeof View>
>((props, ref) => <View ref={ref} {...props} />);

const SCOPE = 'SLIDER';
export const UISlider = createSlider({
  Root:
    Platform.OS === 'web'
      ? withStyleContext(View, SCOPE)
      : withStyleContextAndStates(View, SCOPE),
  Thumb: Platform.OS === 'web' ? ThumbWrapper : withStates(View),
  Track: Pressable,
  FilledTrack: Platform.OS === 'web' ? FilledTrackWrapper : withStates(View),
  ThumbInteraction: View,
});

cssInterop(UISlider, { className: 'style' });
cssInterop(ThumbWrapper, { className: 'style' });
cssInterop(UISlider.Track, { className: 'style' });
cssInterop(FilledTrackWrapper, { className: 'style' });

const sliderStyle = tva({
  base: 'justify-center items-center data-[disabled=true]:web:opacity-40 data-[disabled=true]:web:pointer-events-none',
  variants: {
    orientation: {
      horizontal: 'w-full',
      vertical: 'h-full',
    },
    size: {
      sm: '',
      md: '',
      lg: '',
    },
    isReversed: {
      true: '',
      false: '',
    },
  },
});

const sliderThumbStyle = tva({
  base: 'bg-primary-500 absolute rounded-full data-[focus=true]:bg-primary-600 data-[active=true]:bg-primary-600 data-[hover=true]:bg-primary-600 data-[disabled=true]:bg-primary-500 web:cursor-pointer web:active:outline-4 web:active:outline web:active:outline-primary-400 data-[focus=true]:web:outline-4 data-[focus=true]:web:outline data-[focus=true]:web:outline-primary-400 shadow-hard-1',

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
  parentVariants: {
    orientation: {
      horizontal: 'w-full',
      vertical: 'h-full',
    },
    isReversed: {
      true: '',
      false: '',
    },
    size: {
      sm: '',
      md: '',
      lg: '',
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
      class: 'h-1 flex-row',
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
  base: 'bg-primary-500 data-[focus=true]:bg-primary-600 data-[active=true]:bg-primary-600 data-[hover=true]:bg-primary-600',
  parentVariants: {
    orientation: {
      horizontal: 'h-full',
      vertical: 'w-full',
    },
  },
});

type ISliderProps = React.ComponentProps<typeof UISlider> &
  VariantProps<typeof sliderStyle>;

export const Slider = React.forwardRef<
  React.ElementRef<typeof UISlider>,
  ISliderProps
>(
  (
    {
      className,
      size = 'md',
      orientation = 'horizontal',
      isReversed = false,
      ...props
    },
    ref
  ) => {
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
        context={{ size, orientation, isReversed }}
      />
    );
  }
);

type ISliderThumbProps = React.ComponentProps<typeof UISlider.Thumb> &
  VariantProps<typeof sliderThumbStyle>;

export const SliderThumb = React.forwardRef<
  React.ElementRef<typeof UISlider.Thumb>,
  ISliderThumbProps
>(({ className, size, ...props }, ref) => {
  const { size: parentSize } = useStyleContext(SCOPE);

  return (
    <UISlider.Thumb
      //@ts-ignore
      ref={ref}
      {...props}
      className={sliderThumbStyle({
        parentVariants: {
          size: parentSize,
        },
        size,
        class: className,
      })}
    />
  );
});

type ISliderTrackProps = React.ComponentProps<typeof UISlider.Track> &
  VariantProps<typeof sliderTrackStyle>;

export const SliderTrack = React.forwardRef<
  React.ElementRef<typeof UISlider.Track>,
  ISliderTrackProps
>(({ className, ...props }, ref) => {
  const {
    orientation: parentOrientation,
    size: parentSize,
    isReversed,
  } = useStyleContext(SCOPE);

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
});

type ISliderFilledTrackProps = React.ComponentProps<
  typeof UISlider.FilledTrack
> &
  VariantProps<typeof sliderFilledTrackStyle>;

export const SliderFilledTrack = React.forwardRef<
  React.ElementRef<typeof UISlider.FilledTrack>,
  ISliderFilledTrackProps
>(({ className, ...props }, ref) => {
  const { orientation: parentOrientation } = useStyleContext(SCOPE);

  return (
    <UISlider.FilledTrack
      //@ts-ignore
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
