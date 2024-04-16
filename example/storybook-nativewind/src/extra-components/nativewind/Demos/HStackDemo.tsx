import React from 'react';
import { Box, HStack } from '../../../core-components/nativewind';

const HStackDemo = () => {
  return (
    <HStack space="sm" reversed={false}>
      <Box className="h-10 w-10 bg-primary-300" />
      <Box className="h-10 w-10 bg-primary-400" />
      <Box className="h-10 w-10 bg-primary-500" />
    </HStack>
  );
};

export default HStackDemo;
