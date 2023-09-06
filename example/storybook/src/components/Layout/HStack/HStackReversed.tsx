import { HStack } from '@gluestack-ui/themed';
import { Box } from '@gluestack-ui/themed';
import React from 'react';

const HStackReversed = ({ ...props }) => {
  return (
    <HStack mt="$5" {...props} reversed>
      <Box sx={{ w: 100, h: 100, bg: '$blue300' }} />
      <Box sx={{ w: 100, h: 100, bg: '$blue400' }} />
      <Box sx={{ w: 100, h: 100, bg: '$blue500' }} />
      <Box sx={{ w: 100, h: 100, bg: '$blue600' }} />
    </HStack>
  );
};

export default HStackReversed;
