import type { ComponentStory } from '@storybook/react-native';
import { Text, Center } from '@gluestack-ui/themed';
import React from 'react';

type MyCenterStory = ComponentStory<typeof Center>;

const CenterBasic: MyCenterStory = () => {
  return (
    <Center bg="$primary500" h={200} w={300}>
      <Text color="white" fontWeight="$bold">
        This is the center.
      </Text>
    </Center>
  );
};

export default CenterBasic;

export { Text, Center };
