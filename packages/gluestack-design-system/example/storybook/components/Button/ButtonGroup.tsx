import type { ComponentStory } from '@storybook/react-native';
import { Button, Center } from '@gluestack/design-system';
import Wrapper from '../Wrapper';
import React from 'react';

type MyButtonStory = ComponentStory<typeof Button>;

const GroupedExample: MyButtonStory = ({}) => {
  return (
    <Wrapper>
      <Center>
        <Button.Group direction="row">
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

export const ButtonGroup = GroupedExample.bind({});

ButtonGroup.parameters = {
  controls: {
    exclude: /.*/g,
  },
  docs: {
    description: {
      story: 'ButtonGroup',
    },
  },
};
