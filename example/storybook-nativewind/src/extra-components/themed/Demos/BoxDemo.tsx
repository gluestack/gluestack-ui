import { Box, Text } from '../../../core-components/themed';
import React from 'react';

const BoxDemo = () => {
  return (
    <Box bg="$primary500" p="$5">
      <Text
        color="$textLight100"
        sx={{
          _dark: {
            color: '$textLight800',
          },
        }}
      >
        This is the Box
      </Text>
    </Box>
  );
};

export default BoxDemo;
