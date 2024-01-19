import React from 'react';
import {
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
  HStack,
  Box,
  Icon,
  Heading,
  Tooltip,
  TooltipContent,
  Button,
  Center,
} from '@custom-ui/themed';

import { Volume, Volume2Icon, LightbulbIcon } from 'lucide-react-native';

const SliderBasic = ({ value: valueProp = 60, ...props }: any) => {
  const [sliderValue, setSliderValue] = React.useState(valueProp);
  const handleChange = (value: any) => {
    setSliderValue(value);
  };

  return (
    <Slider
      {...props}
      w={300}
      h={300}
      mt="$4"
      value={sliderValue}
      onChange={(value: any) => {
        handleChange(value);
      }}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};

SliderBasic.description =
  'This is a basic Slider component example. Sliders are used to select a value from a range of values.';

export default SliderBasic;

export {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
  Volume,
  HStack,
  Volume2Icon,
  Text,
  Box,
  LightbulbIcon,
  Icon,
  Heading,
  Tooltip,
  TooltipContent,
  Button,
  Center,
};
