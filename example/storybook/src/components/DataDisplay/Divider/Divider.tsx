import React from 'react';
import { Text, Divider, VStack, HStack, Box } from '../../../ui-components';
import Wrapper from '../../Wrapper';

export const DividerStory = () => {
  return (
    <Wrapper>
      <VStack
        space="md"
        sx={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <HStack
          sx={{
            h: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Simple</Text>
          <Divider orientation="vertical" sx={{ mx: '$3' }} />
          <Text>Easy</Text>
          <Divider sx={{ mx: '$3' }} orientation="vertical" />
          <Text>Beautiful</Text>
        </HStack>

        <VStack
          sx={{
            w: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Firefox</Text>
          <Divider orientation="horizontal" sx={{ my: '$2' }} />
          <Text>Chrome</Text>
        </VStack>
      </VStack>
    </Wrapper>
  );
};

export { VStack, HStack, Divider, Box };
