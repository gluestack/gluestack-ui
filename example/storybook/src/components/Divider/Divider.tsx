import React from 'react';
import { HStack } from '@gluestack/design-system';
import { VStack } from '@gluestack/design-system';
import { Text } from '@gluestack/design-system';
import Wrapper from '../Wrapper';

import { createDivider } from '@universa11y/divider';
import { Root } from '../styled-components/divider';

export const Divider: any = createDivider({
  Root,
});

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
          <Divider variant="horizontal" sx={{ mx: 10, bg: '$red500', h: 2 }} />
          <Text>Chrome</Text>
        </VStack>
      </VStack>
    </Wrapper>
  );
};
