import React from 'react';
import { Box, VStack } from '@gluestack-ui/themed';

const VStackDemo = () => {
  return (
    <VStack space="sm" reversed={false}>
      <Box w="$9" h="$9" bg="$blue300" />
      <Box w="$9" h="$9" bg="$blue400" />
      <Box w="$9" h="$9" bg="$blue500" />
    </VStack>
  );
};

export default VStackDemo;
