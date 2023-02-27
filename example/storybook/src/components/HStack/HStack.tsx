import React from 'react';
import { Heading, HStack, Box } from '../../ui-components';
import Wrapper from '../Wrapper';

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

export { Box };
