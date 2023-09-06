import React from 'react';
import { HStack, Box } from '@gluestack-ui/themed';

const HStackStory = ({ space, reversed, ...props }: any) => {
  return (
    <HStack space={space} mt="$5" reversed={reversed} {...props}>
      <Box sx={{ w: 100, h: 100, bg: '$blue300' }} />
      <Box sx={{ w: 100, h: 100, bg: '$blue400' }} />
      <Box sx={{ w: 100, h: 100, bg: '$blue500' }} />
      <Box sx={{ w: 100, h: 100, bg: '$blue600' }} />
    </HStack>
  );
};

export default HStackStory;

export { Box, HStack };
