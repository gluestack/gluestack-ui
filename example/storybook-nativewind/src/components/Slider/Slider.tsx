import React from 'react';
import { VStack } from '@/components/ui/vstack';
import { Tooltip, TooltipContent } from '@/components/ui/tooltip';
import { HStack } from '@/components/ui/hstack';
import { Center } from '@/components/ui/center';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { Box } from '@/components/ui/box';
import { Icon } from '@/components/ui/icon';

import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@/components/ui/slider';

import { Volume, Volume2Icon, LightbulbIcon } from 'lucide-react-native';

const SliderBasic = ({ value, ...props }: any) => {
  const [sliderValue, setSliderValue] = React.useState(value);
  const handleChange = (value: any) => {
    setSliderValue(value);
  };

  return (
    <Slider
      {...props}
      value={sliderValue}
      className="w-[300px] h-[300px] mt-4"
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
