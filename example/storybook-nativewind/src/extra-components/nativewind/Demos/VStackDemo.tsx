import React from 'react';
import { Box, VStack } from '../../../core-components/nativewind';

const VStackDemo = () => {
  return (
    <VStack
      space={'md'}
      //@ts-ignore
      sx={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <Box className="h-10 w-10 bg-primary-300" />
      <Box className="h-10 w-10 bg-primary-400" />
      <Box className="h-10 w-10 bg-primary-500" />
    </VStack>
  );
};

export default VStackDemo;
