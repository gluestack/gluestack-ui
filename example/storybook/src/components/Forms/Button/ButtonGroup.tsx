import type { ComponentStory } from '@storybook/react-native';
import { Button, Center } from '../../../ui-components';

import React from 'react';

type MyButtonStory = ComponentStory<typeof Button>;

export const ButtonGroupStory: MyButtonStory = ({ ...props }) => {
  return (
    <Center>
      {/** @ts-ignore */}
      <Button.Group {...props}>
        <Button>
          <Button.Text>Button 1</Button.Text>
        </Button>
        <Button>
          <Button.Text>Button 2</Button.Text>
        </Button>
        <Button>
          <Button.Text>Button 3</Button.Text>
        </Button>
      </Button.Group>
    </Center>
  );
};
