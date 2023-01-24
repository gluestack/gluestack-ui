import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { HStack } from './HStack';
import { View } from 'react-native';

export const HStackStory = () => {
  return (
    <Wrapper>
      <HStack
        space="md"
        //@ts-ignore
        sx={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <View
          style={{ height: 20, width: 20, backgroundColor: 'red' }}
          // sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue300' } }}
        />
        <View
          style={{ height: 20, width: 20, backgroundColor: 'red' }}
          // sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue400' } }}
        />
        <View
          style={{ height: 20, width: 20, backgroundColor: 'red' }}
          // sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue500' } }}
        />
        <View
          style={{ height: 20, width: 20, backgroundColor: 'red' }}
          // sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue600' } }}
        />
      </HStack>
    </Wrapper>
  );
};
const MyHStackVariantMeta: ComponentMeta<typeof HStackStory> = {
  title: 'recipes/stories/HStack',
  component: HStackStory,
};

export default MyHStackVariantMeta;
