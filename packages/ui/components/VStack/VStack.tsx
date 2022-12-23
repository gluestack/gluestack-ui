import React from 'react';
import { HStack, VStack, Box } from '@gluestack/ui';

export const VStackExample = () => {
  return (
    <HStack space="md">
      <VStack
        space="lg"
        //@ts-ignore
        sx={{ style: { justifyContent: 'center', alignItems: 'center' } }}
      >
        <Box sx={{ style: { w: 50, h: 50, bg: '$blue300' } }} />
        <Box sx={{ style: { w: 50, h: 50, bg: '$blue400' } }} />
        <Box sx={{ style: { w: 50, h: 50, bg: '$blue500' } }} />
        <Box sx={{ style: { w: 50, h: 50, bg: '$blue600' } }} />
      </VStack>
      <VStack
        space="lg"
        reversed
        //@ts-ignore
        sx={{ style: { justifyContent: 'center', alignItems: 'center' } }}
      >
        <Box sx={{ style: { w: 50, h: 50, bg: '$blue300' } }} />
        <Box sx={{ style: { w: 50, h: 50, bg: '$blue400' } }} />
        <Box sx={{ style: { w: 50, h: 50, bg: '$blue500' } }} />
        <Box sx={{ style: { w: 50, h: 50, bg: '$blue600' } }} />
      </VStack>
    </HStack>
  );
};
