import { ComponentStory } from '@storybook/react-native';
import { Box, Text, Center, HStack } from '@gluestack/ui';
import React from 'react';

type MyCenterStory = ComponentStory<typeof Center>;

const ShapeExample: MyCenterStory = ({ bg, w, h, ...props }) => {
  return (
    <HStack space="md">
      <Center bg="$pink800" h={60} w={60} borderRadius={999}>
        <Text color="white" fontWeight="bold">
          Circle
        </Text>
      </Center>
      <Center bg="$violet500" h={60} w={60}>
        <Text color="white" fontWeight="bold">
          20
        </Text>
      </Center>
    </HStack>
  );
};

export const Shapes = ShapeExample.bind({});

Shapes.parameters = {
  // options: {
  //   withKnobs: {
  //     disable: true, // do not show the knobs addon on this story
  //   },
  // },
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
