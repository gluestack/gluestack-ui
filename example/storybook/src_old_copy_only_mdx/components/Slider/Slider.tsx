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

export const AccessibleSlider: any = createSlider({
  Root,
  ThumbInteraction,
  Thumb,
  Track,
  FilledTrack,
});

export const Slider = () => {
  const [sliderValue, setSliderValue] = React.useState(40);
  const handleChange = (value: any) => {
    setSliderValue(value);
  };
  return (
    <Wrapper>
      <AccessibleSlider
        w="50%"
        value={sliderValue}
        onChange={(value: any) => {
          handleChange(value);
        }}
      >
        <AccessibleSlider.Track>
          <AccessibleSlider.FilledTrack />
        </AccessibleSlider.Track>
        <AccessibleSlider.Thumb />
      </AccessibleSlider>
      <Text style={{ marginTop: 20 }}>Slider Value {sliderValue}</Text>
    </Wrapper>
  );
};

export default Slider;
