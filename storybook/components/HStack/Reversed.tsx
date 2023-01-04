import { ComponentStory } from '@storybook/react-native';
import { Box, Heading, HStack } from '@gluestack/ui';
import React from 'react';

type MyHStackStory = ComponentStory<typeof HStack>;

const ReversedExample: MyHStackStory = ({ space, ...props }) => {
  return (
    <>
      <Heading mt="$4">HStack reversed</Heading>
      <HStack space={space} mt="$5" reversed>
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue300' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue400' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue500' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue600' } }} />
      </HStack>
    </>
  );
};

export const Reversed = ReversedExample.bind({});

Reversed.parameters = {
  controls: {
    exclude: /.*/g,
  },
};
