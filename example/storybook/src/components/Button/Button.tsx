/* eslint-disable no-console */
import type { ComponentStory } from '@storybook/react-native';
import { Center } from '@components';
import React from 'react';
import Wrapper from '../Wrapper';

import { Button } from '@components';

type MyButtonStory = ComponentStory<typeof Button>;

export const ButtonStory: MyButtonStory = ({
  text = 'Button',
  ...props
}: any) => {
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

export { InfoIcon, AddIcon } from '@gluestack/design-system';
