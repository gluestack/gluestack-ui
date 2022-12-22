import { Slider, VStack, Text } from '@gluestack/ui';
import React from 'react';

export const Example = ({ value: valueProp, ...props }: any) => {
  const [sliderValue, setSliderValue] = React.useState(0);
  const handleChange = (value: any) => {
    setSliderValue(value);
  };

  React.useEffect(() => {
    handleChange(valueProp);
  }, [valueProp]);
  return (
    <VStack sx={{ style: { h: 100, alignItems: 'center' } }} space="md">
      <Slider
        value={sliderValue}
        onChange={(value) => {
          handleChange(value);
        }}
        {...props}
      >
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
      <Text> Slider Value {sliderValue}</Text>
    </VStack>
  );
};
