import React from 'react';
import { HStack, VStack, Box } from '@gluestack/ui';

export const VStackExample = () => {
  return (
    <HStack space="md">
      <VStack
        space="sm"
        //@ts-ignore
        sx={{ style: { justifyContent: 'center', alignItems: 'center' } }}
      >
        <Box sx={{ style: { w: 50, h: 50, bg: '$primary300' } }} />
        <Box sx={{ style: { w: 50, h: 50, bg: '$primary400' } }} />
        <Box sx={{ style: { w: 50, h: 50, bg: '$primary500' } }} />
        <Box sx={{ style: { w: 50, h: 50, bg: '$primary600' } }} />
      </VStack>
      <VStack
        space="sm"
        reversed
        //@ts-ignore
        sx={{ style: { justifyContent: 'center', alignItems: 'center' } }}
      >
        <Box sx={{ style: { w: 50, h: 50, bg: '$primary300' } }} />
        <Box sx={{ style: { w: 50, h: 50, bg: '$primary400' } }} />
        <Box sx={{ style: { w: 50, h: 50, bg: '$primary500' } }} />
        <Box sx={{ style: { w: 50, h: 50, bg: '$primary600' } }} />
      </VStack>
    </HStack>
  );
};
