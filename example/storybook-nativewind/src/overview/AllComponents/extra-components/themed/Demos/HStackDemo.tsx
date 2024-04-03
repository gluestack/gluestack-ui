import React from 'react';
import { Box, HStack } from '../';

const HStackDemo = () => {
  return (
    <HStack space="sm" reversed={false}>
      <Box w="$9" h="$9" bg="$primary300" />
      <Box w="$9" h="$9" bg="$primary400" />
      <Box w="$9" h="$9" bg="$primary500" />
    </HStack>
  );
};

export default HStackDemo;
