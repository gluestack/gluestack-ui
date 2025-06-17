import { ComponentPreviewer } from '@/components/custom/component-previewer';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@/components/ui/slider';
import { Center } from '@/components/ui/center';

import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <ScrollView
      className="bg-background-0 flex-1"
      contentContainerClassName="px-3 pb-6"
    >
      <ComponentPreviewer
        props={{
          size: {
            control: {
              type: 'select',
            },
            options: ['sm', 'md', 'lg'],
            defaultValue: 'md',
          },
          orientation: {
            control: {
              type: 'select',
            },
            options: ['horizontal', 'vertical'],
            defaultValue: 'horizontal',
          },
          isDisabled: {
            control: {
              type: 'boolean',
            },
            defaultValue: false,
          },
          isReversed: {
            control: {
              type: 'boolean',
            },
            defaultValue: false,
          },
        }}
        title={'Basic'}
      >
        {(props) => {
          return (
            <Center className="w-[300px] h-[150px]">
              <Slider
                defaultValue={30}
                size={props.size}
                orientation={props.orientation}
                isDisabled={props.isDisabled}
                isReversed={props.isReversed}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Center>
          );
        }}
      </ComponentPreviewer>
    </ScrollView>
  );
}
