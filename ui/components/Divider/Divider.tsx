import React from 'react';
import { Divider, HStack, Text, VStack } from '@gluestack/ui';

export const MyDividerExample = ({ props }: any) => {
  return (
    <VStack>
      <HStack sx={{ style: { h: '40px' } }}>
        <Text>Men</Text>
        <Divider variant="vertical" {...props} />
        <Text>Women</Text>
      </HStack>

      <VStack sx={{ style: { w: '100px' } }}>
        <Text>Men</Text>
        <Divider variant="horizontal" />
        <Text>Women</Text>
      </VStack>
    </VStack>
  );
};
