import type { ComponentStory } from '@storybook/react-native';
import { Box, Heading, VStack } from '@gluestack/design-system';
import React from 'react';

type MyVStackStory = ComponentStory<typeof VStack>;

const ReversedExample: MyVStackStory = ({ space, ...props }) => {
  return (
    <>
      <Heading mt="$4">VStack reversed</Heading>
      <VStack
        space={space}
        mt="$5"
        sx={{ style: { justifyContent: 'center', alignItems: 'center' } }}
        reversed
        {...props}
      >
        <Box
          sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue300' } }}
        />
        <Box
          sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue400' } }}
        />
        <Box
          sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue500' } }}
        />
        <Box
          sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue600' } }}
        />
      </VStack>
    </>
  );
};

export const Reversed = ReversedExample.bind({});

Reversed.parameters = {
  controls: {
    exclude: /.*/g,
  },
};
