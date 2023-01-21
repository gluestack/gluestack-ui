import { Root } from './styled-component';
import { createPressable } from '@universa11y/pressable';
import React from 'react';
import { Text } from 'react-native';

const PressableTemp = createPressable({
  Root,
});

export const Pressable = () => {
  return (
    <>
      <PressableTemp>
        <Text>Hello</Text>
      </PressableTemp>
    </>
  );
};
