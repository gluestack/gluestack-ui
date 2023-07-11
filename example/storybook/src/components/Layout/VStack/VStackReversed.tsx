import type { ComponentStory } from '@storybook/react-native';
import React from 'react';
import { Box, Center } from '../../../ui-components';
import { Heading } from '../../../ui-components';

import { VStack } from '../../../ui-components';

type MyVStackStory = ComponentStory<typeof VStack>;

export const VStackReversedExample: MyVStackStory = ({ space, ...props }) => {
  return (
    <Center>
      <Heading mt="$4">VStack reversed</Heading>
      <VStack
        space={space}
        mt="$5"
        // sx={{ justifyContent: 'center', alignItems: 'center' }}
        {...props}
        reversed
      >
        <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$blue300' }} />
        <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$blue400' }} />
        <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$blue500' }} />
        <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$blue600' }} />
      </VStack>
    </Center>
  );
};
