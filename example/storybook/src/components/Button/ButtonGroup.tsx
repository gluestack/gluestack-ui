import type { ComponentStory } from '@storybook/react-native';
import { Button } from '@gluestack/design-system';
import { Center } from '@gluestack/design-system';
import Wrapper from '../Wrapper';
import React from 'react';

type MyButtonStory = ComponentStory<typeof Button>;

export const GroupedExample: MyButtonStory = (
  {
    // text = 'Button',
    // ...props
  }
) => {
  return (
    <Wrapper>
      <Center>
        <Button.Group direction="column">
          <Button>
            <Button.Text>Button 1</Button.Text>
          </Button>
          <Button bg="$blue500">
            <Button.Text>Button 2</Button.Text>
          </Button>
          <Button>
            <Button.Text>Button 3</Button.Text>
          </Button>
        </Button.Group>
      </Center>
    </Wrapper>
  );
};
