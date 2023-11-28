import React from 'react';
import { Box, HStack } from '@gluestack-ui/themed';

const HStackDemo = () => {
  return (
    <HStack space="sm" reversed={false}>
      <Box w="$9" h="$9" bg="$blue300" />
      <Box w="$9" h="$9" bg="$blue400" />
      <Box w="$9" h="$9" bg="$blue500" />
    </HStack>
  );
};

export default HStackDemo;
