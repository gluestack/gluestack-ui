import { Root } from './styled-component';
import { createSlider } from '@universa11y/slider';
import React from 'react';

const SliderTemp = createSlider({
  Root,
});

export const Slider = () => {
  return (
    <>
      <SliderTemp color="$primary500" />
    </>
  );
};
