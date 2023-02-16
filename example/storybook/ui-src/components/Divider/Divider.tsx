import React from 'react';
import { HStack } from '@gluestack/ui-compiled';
import { VStack } from '@gluestack/ui-compiled';
import { Divider } from '@gluestack/ui-compiled';
import { Text } from '@gluestack/ui-compiled';
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
            sx={{ mx: 10, bg: '$emerald500', w: 2 }}
          />
          <Text>Easy</Text>
          <Divider sx={{ mx: 10, bg: '$indigo500', w: 2 }} variant="vertical" />
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
          <Divider variant="horizontal" sx={{ mx: 10, bg: '$red500', h: 2 }} />
          <Text>Chrome</Text>
        </VStack>
      </VStack>
    </Wrapper>
  );
};
