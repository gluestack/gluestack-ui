import type { ComponentStory } from '@storybook/react-native';
import { Center, Heading } from '../../../ui-components';
import { HStack } from '../../../ui-components';
import { Box } from '../../../ui-components';
import React from 'react';

type MyHStackStory = ComponentStory<typeof HStack>;

export const HStackReversedExample: MyHStackStory = ({ space, ...props }) => {
  return (
    <Center>
      <Heading mt="$4">HStack reversed</Heading>
      <HStack space={space} mt="$5" {...props} reversed>
        <Box sx={{ w: 100, h: 100, bg: '$blue300' }} />
        <Box sx={{ w: 100, h: 100, bg: '$blue400' }} />
        <Box sx={{ w: 100, h: 100, bg: '$blue500' }} />
        <Box sx={{ w: 100, h: 100, bg: '$blue600' }} />
      </HStack>
    </Center>
  );
};
