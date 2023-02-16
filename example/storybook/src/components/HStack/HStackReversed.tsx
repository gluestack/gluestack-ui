import type { ComponentStory } from '@storybook/react-native';
import { Heading } from '@gluestack/design-system';
import { HStack } from '@gluestack/design-system';
import { Box } from '@gluestack/design-system';
import React from 'react';
import Wrapper from '../Wrapper';

type MyHStackStory = ComponentStory<typeof HStack>;

export const HStackReversedExample: MyHStackStory = ({ space, ...props }) => {
  return (
    <Wrapper>
      <Heading mt="$4">HStack reversed</Heading>
      <HStack space={space} mt="$5" {...props} reversed>
        <Box sx={{ w: 100, h: 100, bg: '$blue300' }} />
        <Box sx={{ w: 100, h: 100, bg: '$blue400' }} />
        <Box sx={{ w: 100, h: 100, bg: '$blue500' }} />
        <Box sx={{ w: 100, h: 100, bg: '$blue600' }} />
      </HStack>
    </Wrapper>
  );
};
