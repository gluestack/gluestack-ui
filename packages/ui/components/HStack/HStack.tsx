import React from 'react';
import { Heading, HStack, Box } from '@gluestack/ui';

export const HStackExample = () => {
  return (
    <>
      <Heading>HStack</Heading>
      <HStack space="lg" sx={{ style: { mb: '$10', mt: '$4' } }}>
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue300' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue400' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue500' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue600' } }} />
      </HStack>
      <Heading>HStack reversed</Heading>
      <HStack space="lg" reversed sx={{ style: { mb: '$10', mt: '$4' } }}>
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue300' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue400' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue500' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue600' } }} />
      </HStack>
    </>
  );
};
