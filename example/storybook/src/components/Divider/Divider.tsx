import React from 'react';
import { Text, Divider, VStack, HStack } from '../../ui-components';
import Wrapper from '../Wrapper';

export const DividerStory = () => {
  return (
    <Wrapper>
      <VStack
        space="md"
        sx={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <HStack
          sx={{
            style: {
              h: 40,
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          <Text>Simple</Text>
          <Divider
            variant="vertical"
            // orientation="vertical"
            sx={{ mx: 10, bg: '$emerald500', h: 30 }}
          />
          <Text>Easy</Text>
          <Divider
            sx={{ mx: 10, bg: '$indigo500', h: 30 }}
            variant="vertical"
          />
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
          <Divider variant="horizontal" sx={{ bg: '$red500', h: 2 }} />
          <Text>Chrome</Text>
        </VStack>
      </VStack>
    </Wrapper>
  );
};

export { VStack, HStack, Divider };
