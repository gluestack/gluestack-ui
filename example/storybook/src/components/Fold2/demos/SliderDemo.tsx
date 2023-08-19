import { Slider } from '../../../ui-components';
import React from 'react';

const SliderDemo = () => {
  return (
    <Slider defaultValue={30} size="md">
      <Slider.Track>
        <Slider.FilledTrack />
      </Slider.Track>
      <Slider.Thumb />
    </Slider>
  );
};

export default SliderDemo;
