import React from 'react';
import {
  Center,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderLeftThumb,
  RangeSliderRightThumb,
  Text,
  VStack,
  HStack,
  Box,
  Icon,
  Heading,
  Tooltip,
  TooltipContent,
  Button,
} from '@gluestack-ui/themed';

const RangeSliderBasic = ({ ...props }: any) => {
  const [sliderValue, setSliderValue] = React.useState([20, 49]);

  return (
    <Center alignItems="center" w={400}>
      <RangeSlider
        sliderTrackHeight={4}
        {...props}
        w={300}
        h={300}
        mt="$4"
        size="lg"
        value={sliderValue}
        onChange={setSliderValue}
        label="RangeSlider"
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderLeftThumb />
        <RangeSliderRightThumb />
      </RangeSlider>
      <RangeSlider
        sliderTrackHeight={4}
        {...props}
        w={300}
        h={300}
        mt="$4"
        size="sm"
        value={sliderValue}
        onChange={setSliderValue}
        label="RangeSlider"
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderLeftThumb />
        <RangeSliderRightThumb />
      </RangeSlider>
    </Center>
  );
};

RangeSliderBasic.description =
  'This is a basic RangeSlider component example. RangeSlider are used to select a value from a range of values.';

export default RangeSliderBasic;

export {
  Center,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderLeftThumb,
  RangeSliderRightThumb,
  Text,
  VStack,
  HStack,
  Box,
  Icon,
  Heading,
  Tooltip,
  TooltipContent,
  Button,
};
export { Volume, Volume2Icon, LightbulbIcon } from 'lucide-react-native';
