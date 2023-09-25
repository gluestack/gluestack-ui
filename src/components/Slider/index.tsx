import React, { forwardRef } from 'react';
import { createSlider } from '@gluestack-ui/slider';

import {
  Root,
  Thumb,
  Track,
  FilledTrack,
  ThumbInteraction,
} from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const AccessibleSlider = createSlider({
  Root,
  Thumb,
  Track,
  FilledTrack,
  ThumbInteraction,
});

const SliderTemp = forwardRef(
  ({ colorScheme = 'primary', children, ...props }: any, ref?: any) => {
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleSlider colorScheme={colorScheme} {...resolvedProps} ref={ref}>
        {children}
      </AccessibleSlider>
    );
  }
) as any;

const SliderThumbTemp = forwardRef(({ ...props }: any, ref?: any) => {
  const resolvedProps = usePropResolution(props);
  return <AccessibleSlider.Thumb {...resolvedProps} ref={ref} />;
}) as any;

const SliderTrackTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const resolvedProps = usePropResolution(props);
  return (
    <AccessibleSlider.Track {...resolvedProps} ref={ref}>
      {children}
    </AccessibleSlider.Track>
  );
}) as any;

const SliderFilledTrackTemp = forwardRef(({ ...props }: any, ref?: any) => {
  const resolvedProps = usePropResolution(props);
  return <AccessibleSlider.FilledTrack {...resolvedProps} ref={ref} />;
}) as any;

export type ISliderComponentType<Slider, Thumb, Track, FilledTrack> =
  GenericComponentType<Slider> & {
    Thumb: GenericComponentType<Thumb>;
    Track: GenericComponentType<Track>;
    FilledTrack: GenericComponentType<FilledTrack>;
  };

const SliderNew = SliderTemp;
SliderNew.Thumb = SliderThumbTemp;
SliderNew.Track = SliderTrackTemp;
SliderNew.FilledTrack = SliderFilledTrackTemp;

export const Slider = SliderNew as ISliderComponentType<
  typeof AccessibleSlider,
  typeof AccessibleSlider.Thumb,
  typeof AccessibleSlider.Track,
  typeof AccessibleSlider.FilledTrack
>;
