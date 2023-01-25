import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { VStack } from './VStack';
import { View } from 'react-native';

export const VStackStory = () => {
  return (
    <Wrapper>
      <VStack
        space="md"
        //@ts-ignore
        sx={{ style: { justifyContent: 'center', alignItems: 'center' } }}
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
      </VStack>
    </Wrapper>
  );
};
const MyVStackVariantMeta: ComponentMeta<typeof VStackStory> = {
  title: 'components/stories/VStack',
  component: VStackStory,
};

export default MyVStackVariantMeta;
