import React from 'react';
import {
  Text,
  Slider,
  VStack,
  HStack,
  Box,
  Icon,
  Heading,
  Tooltip,
  Button,
} from '../../../ui-components';
import Wrapper from '../../Wrapper';
import { Volume, Volume2Icon, LightbulbIcon } from 'lucide-react-native';

export const SliderStory = ({
  value = 60,
  ...props
}: {
  value: number;
  props: any;
}) => {
  const [sliderValue, setSliderValue] = React.useState(0);
  const handleChange = (value: any) => {
    setSliderValue(value);
  };

  // React.useEffect(() => {
  //   handleChange(valueProp);
  // }, [valueProp]);

  return (
    <Wrapper>
      <Box h="70vh" w="90%">
        <Slider
          w="100%"
          value={sliderValue}
          onChange={(value: any) => {
            handleChange(value);
          }}
          {...props}
          orientation="vertical"
          isReversed
          // sliderTrackHeight={4}
          // thumbSize={16}
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Box>
      <Text mt="$4">Slider Value {sliderValue}</Text>
    </Wrapper>
  );
};

export {
  Slider,
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
  Button,
};
