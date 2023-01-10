import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Divider, HStack, Text, VStack } from '@gluestack/design-system';
import Wrapper from '../Wrapper';

const MyDividerMeta: ComponentMeta<typeof Divider> = {
  title: 'DATA DISPLAY/Divider',
  component: Divider,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
};

export default MyDividerMeta;

type MyDividerStory = ComponentStory<typeof Divider>;

export const Basic: MyDividerStory = () => {
  return (
    <Wrapper>
      <VStack
        space="md"
        sx={{ style: { justifyContent: 'center', alignItems: 'center' } }}
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
            sx={{ style: { mx: 10, bg: '$emerald500', w: 2 } }}
          />
          <Text>Easy</Text>
          <Divider
            sx={{ style: { mx: 10, bg: '$indigo500', w: 2 } }}
            variant="vertical"
          />
          <Text>Beautiful</Text>
        </HStack>

        <VStack
          sx={{
            style: {
              w: 100,
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          <Text>Firefox</Text>
          <Divider
            variant="horizontal"
            sx={{ style: { mx: 10, bg: '$red500', h: 2 } }}
          />
          <Text>Chrome</Text>
        </VStack>
      </VStack>
    </Wrapper>
  );
};
