import React from 'react';
import type { ComponentStory } from '@storybook/react-native';
import { Button, HStack, AddIcon, InfoIcon } from '@gluestack/design-system';
import Wrapper from '../Wrapper';
type MyButtonStory = ComponentStory<typeof Button>;
// type MyButtonGroupStory = ComponentStory<typeof Button>;

const ButtonWithIconsTemp: MyButtonStory = ({}) => {
  return (
    <Wrapper>
      <HStack space="md">
        <Button>
          <InfoIcon mr="$2" />
          <Button.Text>LeftIcon</Button.Text>
        </Button>
        <Button variant="unstyled">
          <Button.Text>RightIcon</Button.Text>
          <AddIcon ml="$2" />
        </Button>
      </HStack>
    </Wrapper>
  );
};

export const ButtonWithIcons = ButtonWithIconsTemp.bind({});

ButtonWithIcons.parameters = {
  controls: {
    exclude: /.*/g,
  },
};
