import React, { useState } from 'react';
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
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderLeftThumb,
  RangeSliderRightThumb,
  View,
  ButtonText,
} from '@gluestack-ui/themed';
// import { createRangeSlider } from '@gluestack-ui/range-slider';
import { Volume, Volume2Icon, LightbulbIcon } from 'lucide-react-native';

const RangeSliderBasic = ({ value: valueProp, ...props }: any) => {
  const [sliderValue, setSliderValue] = React.useState([30, 49]);
  const [height, setHeight] = useState(30);
  const handleChange = (values: any) => {
    setSliderValue(values);
  };
  return (
    <Center>
      <RangeSlider
        sliderTrackHeight={4}
        {...props}
        // defaultValue={[30, 40]}
        value={[20, 50]}
        w={300}
        h={300}
        mt="$4"
        value={sliderValue}
        onChange={(values: any) => {
          console.log(values, 'values ');
          handleChange(values);
        }}
        orientation="vertical"
      >
        <RangeSlider.Track>
          <RangeSlider.FilledTrack />
        </RangeSlider.Track>
        {/* <RangeSlider.LeftThumb />*/}
        <RangeSlider.RightThumb />
      </RangeSlider>
      {/* <RangeSlider
        {...props}
        w={300}
        h={300}
        mt="$4"
        sliderTrackHeight={4}
        value={sliderValue}
        onChange={(values: any) => {
          handleChange(values);
        }}
      >
        <RangeSlider.Track>
          <RangeSlider.FilledTrack bg="$emerald600" />
        </RangeSlider.Track>
        <RangeSlider.LeftThumb
          bg="$emerald600"
          $active-outlineColor="$emerald500"
        />
        <RangeSlider.RightThumb
          bg="$emerald600"
          $active-outlineColor="$emerald500"
        />
      </RangeSlider> */}
    </Center>
  );
};

RangeSliderBasic.description =
  'This is a basic RangeSlider component example. RangeSlider are used to select a value from a range of values.';

export default RangeSliderBasic;

export {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderLeftThumb,
  RangeSliderRightThumb,
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
