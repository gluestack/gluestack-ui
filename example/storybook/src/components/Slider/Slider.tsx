import {
  Root,
  Thumb,
  ThumbInteraction,
  FilledTrack,
  Track,
} from './styled-component';
import { createSlider } from '@universa11y/slider';
import React from 'react';

const SliderTemp = createSlider({
  Root,
  Thumb,
  ThumbInteraction,
  FilledTrack,
  Track,
});

export const Slider = () => {
  return (
    <>
      <SliderTemp color="$primary500" />
    </>
  );
};
