import React from 'react';
import { Divider, HStack, Text, VStack, Heading } from '@gluestack/ui';

export const MyDividerExample = ({ props }: any) => {
  return (
    <VStack space="sm">
      <Heading>Vertical</Heading>
      <HStack sx={{ style: { h: '40px', alignItems: 'center' } }} space="md">
        <Text>Men</Text>
        <Divider variant="vertical" {...props} />
        <Text>Women</Text>
      </HStack>

      <Heading sx={{ style: { mt: '$10' } }}>Horizontal</Heading>
      <VStack sx={{ style: { w: '100px', alignItems: 'center' } }} space="sm">
        <Text>Men</Text>
        <Divider variant="horizontal" />
        <Text>Women</Text>
      </VStack>
    </VStack>
  );
};
