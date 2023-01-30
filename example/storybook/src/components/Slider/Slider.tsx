import {
  Root,
  Thumb,
  ThumbInteraction,
  FilledTrack,
  Track,
} from './styled-component';
import { createSlider } from '@universa11y/slider';
import React from 'react';
import { Text } from 'react-native';
import { Wrapper } from '../Wrapper';

const SliderTemp = createSlider({
  Root,
  Thumb,
  ThumbInteraction,
  FilledTrack,
  Track,
});

export const Slider = () => {
  const [sliderValue, setSliderValue] = React.useState(50);
  const handleChange = (value: any) => {
    setSliderValue(value);
  };
  return (
    <Wrapper>
      <SliderTemp
        w="50%"
        value={sliderValue}
        onChange={(value: any) => {
          handleChange(value);
        }}
      >
        <SliderTemp.Track>
          <SliderTemp.FilledTrack />
        </SliderTemp.Track>
        <SliderTemp.Thumb />
      </SliderTemp>
      <Text style={{ marginTop: 20 }}>Slider Value {sliderValue}</Text>
    </Wrapper>
  );
};
