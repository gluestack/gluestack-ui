import type { ComponentStory } from '@storybook/react-native';
import { Text } from '@gluestack/ui-compiled';
import React from 'react';
import Wrapper from '../Wrapper';
import { Root } from '../styled-components/center';

export const Center = Root;

type MyCenterStory = ComponentStory<typeof Center>;

const CenterExample: MyCenterStory = () => {
  return (
    <Wrapper>
      <Center bg="$primary500" h={200} w={300}>
        <Text color="white" fontWeight="bold">
          This is the center.
        </Text>
      </Center>
    </Wrapper>
  );
};

export const BasicCenterExample = CenterExample.bind({});

BasicCenterExample.parameters = {
  docs: {
    description: {
      story:
        "Put any child element inside it, give it any width or/and height. It'll ensure the child is centered.",
    },
  },
};
