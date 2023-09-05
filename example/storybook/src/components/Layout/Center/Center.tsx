import type { ComponentStory } from '@storybook/react-native';
import { Text, Center } from '@gluestack-ui/themed';
import React from 'react';

type MyCenterStory = ComponentStory<typeof Center>;

const CenterStory: MyCenterStory = () => {
  return (
    <Center bg="$primary500" h={200} w={300}>
      <Text
        color="white"
        fontWeight="$bold"
        dataSet={{
          'component-props': JSON.stringify({
            'is-text-style': true,
            'component-name': 'Text',
            'size': 'md',
          }),
        }}
      >
        This is the center.
      </Text>
    </Center>
  );
};

export default CenterStory;

export { Text, Center };
