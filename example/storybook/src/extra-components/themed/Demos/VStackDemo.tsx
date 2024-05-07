import React from 'react';
import { Box, VStack } from '../../../core-components/themed';

const VStackDemo = () => {
  return (
    <VStack
      space={'md'}
      //@ts-ignore
      sx={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <Box w="$9" h="$9" bg="$primary300" />
      <Box w="$9" h="$9" bg="$primary400" />
      <Box w="$9" h="$9" bg="$primary500" />
    </VStack>
  );
};

export default VStackDemo;
