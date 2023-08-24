import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@gluestack-ui/themed';
import React from 'react';

const SliderDemo = () => {
  return (
    <Slider defaultValue={30} size="md">
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};

export default SliderDemo;
