import React from 'react';
import { Heading, HStack, VStack, Box } from '@gluestack/ui';
import Wrapper from '../Wrapper';

export const VStackExample = ({ props }: any) => {
  return (
    <Wrapper>
      <HStack space="md">
        <VStack
          space="sm"
          //@ts-ignore
          sx={{ style: { justifyContent: 'center', alignItems: 'center' } }}
        >
          <Heading>VStack</Heading>
          <Box sx={{ style: { w: 50, h: 50, bg: '$primary.300' } }} />
          <Box sx={{ style: { w: 50, h: 50, bg: '$primary.400' } }} />
          <Box sx={{ style: { w: 50, h: 50, bg: '$primary.500' } }} />
          <Box sx={{ style: { w: 50, h: 50, bg: '$primary.600' } }} />
        </VStack>
        <VStack
          space="sm"
          reversed
          //@ts-ignore
          sx={{ style: { justifyContent: 'center', alignItems: 'center' } }}
        >
          <Box sx={{ style: { w: 50, h: 50, bg: '$primary.300' } }} />
          <Box sx={{ style: { w: 50, h: 50, bg: '$primary.400' } }} />
          <Box sx={{ style: { w: 50, h: 50, bg: '$primary.500' } }} />
          <Box sx={{ style: { w: 50, h: 50, bg: '$primary.600' } }} />
          <Heading>VStack reversed</Heading>
        </VStack>
      </HStack>
    </Wrapper>
  );
};
