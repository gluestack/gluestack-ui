import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '../../../core-components/nativewind';
import React from 'react';

export const SliderDemo = () => {
  return (
    <Slider
      defaultValue={30}
      size="md"
      orientation="horizontal"
      isDisabled={false}
      isReversed={false}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};
