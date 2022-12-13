import { Slider, Text } from '@gluestack/ui';
import React from 'react';

import Wrapper from '../Wrapper';

export const Example = ({ props }: any) => {
  const [sliderValue, setSliderValue] = React.useState(0);
  const handleChange = (value: any) => {
    setSliderValue(value);
  };
  return (
    <Wrapper>
      <Slider
        onChange={(value) => {
          handleChange(value);
        }}
      >
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
      <Text> Slider Value {sliderValue}</Text>
    </Wrapper>
  );
};
