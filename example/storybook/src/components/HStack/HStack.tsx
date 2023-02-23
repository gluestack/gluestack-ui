import React from 'react';
import { Heading } from '@gluestack/design-system';
import { Box } from '../Box/Box';

import Wrapper from '../Wrapper';

import { createHStack } from '@gluestack-ui/hstack';
import { Root, Spacer } from '../styled-components/hstack';

export const HStack = createHStack({
  Root,
  Spacer,
});

export const HStackStory = ({ space, reversed, ...props }: any) => {
  return (
    <Wrapper>
      <Heading>HStack</Heading>
      <HStack space={space} mt="$5" reversed={reversed} {...props}>
        <Box sx={{ w: 100, h: 100, bg: '$blue300' }} />
        <Box sx={{ w: 100, h: 100, bg: '$blue400' }} />
        <Box sx={{ w: 100, h: 100, bg: '$blue500' }} />
        <Box sx={{ w: 100, h: 100, bg: '$blue600' }} />
      </HStack>
    </Wrapper>
  );
};
