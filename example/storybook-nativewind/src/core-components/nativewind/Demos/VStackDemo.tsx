import React from 'react';
import { Box, VStack } from '../';

const VStackDemo = () => {
  return (
    <VStack
      space={'$md'}
      //@ts-ignore
      sx={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$primary300' }} />
      <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$primary400' }} />
      <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$primary500' }} />
      <Box sx={{ w: 100, h: 100, rounded: '$sm', bg: '$primary600' }} />
    </VStack>
  );
};

export default VStackDemo;
