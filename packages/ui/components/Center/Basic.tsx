import { ComponentStory } from '@storybook/react-native';
import { Box, Text, Center } from '@gluestack/ui';
import React from 'react';

type MyCenterStory = ComponentStory<typeof Center>;

const BasicExample: MyCenterStory = ({ bg, w, h, ...props }) => {
  return (
    <Center bg="$primary500" h={200} w={300}>
      <Text color="white" fontWeight="bold">
        This is the center.
      </Text>
    </Center>
  );
};

export const Basic = BasicExample.bind({});

Basic.parameters = {
  controls: {
    exclude: /.*/g,
  },
  docs: {
    description: {
      story:
        "Put any child element inside it, give it any width or/and height. It'll ensure the child is centered.",
    },
  },
};
