import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@/components/ui/slider'
import { Center } from '@/components/ui/center'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return (
    <Center className="w-[300px] h-[150px]">
      <Slider
        defaultValue={30}
        orientation="horizontal"
        isDisabled={ false }
        isReversed={ false }
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Center>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  }
];

export default function SliderScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}