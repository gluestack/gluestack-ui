import React from 'react';
import { VStack } from '@gluestack/design-system';
import { Text } from '@gluestack/design-system';
import Wrapper from '../Wrapper';

import { createSlider } from '@universa11y/slider';

import {
  Root,
  Thumb,
  Track,
  FilledTrack,
  ThumbInteraction,
} from '../styled-components/slider';

//@ts-ignore
export const Slider = createSlider({
  Root,
  Thumb,
  Track,
  FilledTrack,
  ThumbInteraction,
}) as any;

export const SliderStory = ({
  value: valueProp = 60,
  ...props
}: {
  value: number;
  props: any;
}) => {
  const [sliderValue, setSliderValue] = React.useState(0);
  const handleChange = (value: any) => {
    setSliderValue(value);
  };

  React.useEffect(() => {
    handleChange(valueProp);
  }, [valueProp]);

  return (
    <Wrapper>
      <VStack sx={{ h: 100, alignItems: 'center' }} space="md">
        <Slider
          value={sliderValue}
          onChange={(value: any) => {
            handleChange(value);
          }}
          {...props}
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
        <Text mt="$4">Slider Value {sliderValue}</Text>
      </VStack>
    </Wrapper>
  );
};
