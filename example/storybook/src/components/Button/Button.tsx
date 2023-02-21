/* eslint-disable no-console */
import type { ComponentStory } from '@storybook/react-native';
import { Center } from '@gluestack/design-system';
import React from 'react';
import Wrapper from '../Wrapper';

import { createButton } from '@universa11y/button';
import {
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
} from '../styled-components/button';

export const Button = createButton({
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
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
          action="primary"
          variant="solid"
          onPress={() => console.log('Hello')}
        >
          <Button.Text>{text}</Button.Text>
        </Button>
      </Center>
    </Wrapper>
  );
};

export { InfoIcon, AddIcon } from '@gluestack/design-system';
