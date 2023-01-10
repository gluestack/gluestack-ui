/* eslint-disable no-console */
import type { ComponentStory } from '@storybook/react-native';
import { Center, Button } from '@gluestack/design-system';
import React from 'react';
import Wrapper from '../Wrapper';

type MyButtonStory = ComponentStory<typeof Button>;

export const Basic: MyButtonStory = ({ text, ...props }) => {
  return (
    <Wrapper>
      <Center>
        <Button {...props} onPress={() => console.log('Hello')}>
          <Button.Text>{text}</Button.Text>
        </Button>
      </Center>
    </Wrapper>
  );
};
