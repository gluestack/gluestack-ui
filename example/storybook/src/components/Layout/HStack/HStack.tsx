import React from 'react';
import { Heading, HStack, Box, Center } from '../../../ui-components';

export const HStackStory = ({ space, reversed, ...props }: any) => {
  return (
    <Center>
      <Heading>HStack</Heading>
      <HStack space={space} mt="$5" reversed={reversed} {...props}>
        <Box sx={{ w: 100, h: 100, bg: '$blue300' }} />
        <Box sx={{ w: 100, h: 100, bg: '$blue400' }} />
        <Box sx={{ w: 100, h: 100, bg: '$blue500' }} />
        <Box sx={{ w: 100, h: 100, bg: '$blue600' }} />
      </HStack>
    </Center>
  );
};

export { Box, HStack };
