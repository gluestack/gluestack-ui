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

const AccessibleSlider = createSlider({
  Root,
  Thumb,
  Track,
  FilledTrack,
  ThumbInteraction,
});

const SliderNew = forwardRef(
  (
    { children, ...props }: React.ComponentProps<typeof AccessibleSlider>,
    ref?: any
  ) => {
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleSlider {...resolvedProps} ref={ref}>
        {children}
      </AccessibleSlider>
    );
  }
) as any;

SliderNew.Thumb = forwardRef(
  ({ ...props }: React.ComponentProps<typeof AccessibleSlider>, ref?: any) => {
    const resolvedProps = usePropResolution(props);
    return <AccessibleSlider.Thumb {...resolvedProps} ref={ref} />;
  }
) as any;

SliderNew.Track = forwardRef(
  (
    { children, ...props }: React.ComponentProps<typeof AccessibleSlider>,
    ref?: any
  ) => {
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleSlider.Track {...resolvedProps} ref={ref}>
        {children}
      </AccessibleSlider.Track>
    );
  }
) as any;

SliderNew.FilledTrack = forwardRef(
  ({ ...props }: React.ComponentProps<typeof AccessibleSlider>, ref?: any) => {
    const resolvedProps = usePropResolution(props);
    return <AccessibleSlider.FilledTrack {...resolvedProps} ref={ref} />;
  }
) as any;

export const Slider = SliderNew as typeof AccessibleSlider;
