import React from 'react';
import { Heading, HStack, Box } from '@gluestack/ui';

export const HStackExample = () => {
  return (
    <>
      <Heading>HStack</Heading>
      <HStack space="sm">
        <Box sx={{ style: { w: 100, h: 100, bg: '$primary.300' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$primary.400' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$primary.500' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$primary.600' } }} />
      </HStack>
      <Heading>HStack reversed</Heading>
      <HStack space="sm" reversed>
        <Box sx={{ style: { w: 100, h: 100, bg: '$primary.300' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$primary.400' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$primary.500' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$primary.600' } }} />
      </HStack>
    </>
  );
};
