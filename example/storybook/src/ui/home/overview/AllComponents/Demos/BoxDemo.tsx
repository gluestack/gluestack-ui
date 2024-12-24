import { Box, Text } from '@gluestack-ui/themed';
import React from 'react';

const BoxDemo = () => {
  return (
    <Box bg="$primary500" p="$5">
      <Text color="white">This is the Box</Text>
    </Box>
  );
};

export default BoxDemo;
