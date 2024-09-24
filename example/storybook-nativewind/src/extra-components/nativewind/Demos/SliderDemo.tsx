import React from 'react';
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '../../../core-components/nativewind';

export const SliderDemo = () => {
  return (
    <Slider defaultValue={30} className="w-[220px]">
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};
