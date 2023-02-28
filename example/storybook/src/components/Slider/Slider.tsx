import React from 'react';
import { Text, Slider, VStack } from '../../ui-components';
import Wrapper from '../Wrapper';

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
      <VStack
        sx={{ h: 100, alignItems: 'center', justifyContent: 'center' }}
        space="md"
      >
        <Slider
          w="50%"
          mt="$4"
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

export { Slider };
