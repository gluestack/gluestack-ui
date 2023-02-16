import { Root } from './styled-component';
import { createPressable } from '@universa11y/pressable';
import React from 'react';
import { Text } from 'react-native';
import { Wrapper } from '../Wrapper';

export const PressableTemp = createPressable({
  Root,
});

export const Pressable = () => {
  return (
    <Wrapper>
      <PressableTemp>
        <Text>Hello</Text>
      </PressableTemp>
    </Wrapper>
  );
};

export default Pressable;

export { Text };
