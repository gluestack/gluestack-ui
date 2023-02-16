/* eslint-disable no-console */
import type { ComponentStory } from '@storybook/react-native';
import { Center } from '@gluestack/ui-compiled';
import React from 'react';
import Wrapper from '../Wrapper';

import { createButton } from '@universa11y/button';
import {
  Root,
  Text,
  Group,
  GroupSpacer,
  Spinner,
} from '../styled-components/button';

export const Button = createButton({
  Root,
  Text,
  Group,
  GroupSpacer,
  Spinner,
});

type MyButtonStory = ComponentStory<typeof Button>;

export const ButtonStory: MyButtonStory = ({
  text = 'Button',
  ...props
}: any) => {
  return (
    <Wrapper>
      <Center>
        <Button
          {...props}
          // action="primary"
          // style="solid"
          onPress={() => console.log('Hello')}
        >
          <Button.Text>{text}</Button.Text>
        </Button>
      </Center>
    </Wrapper>
  );
};
export { Button };
export { InfoIcon, AddIcon } from '@gluestack/ui-compiled';
