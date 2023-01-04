import React from 'react';
import { ComponentStory } from '@storybook/react-native';
import { Button, HStack, AddIcon, InfoIcon } from '@gluestack/ui';
import Wrapper from '../Wrapper';
type MyButtonStory = ComponentStory<typeof Button>;
// type MyButtonGroupStory = ComponentStory<typeof Button>;

const ButtonWithIconsTemp: MyButtonStory = ({}) => {
  return (
    <Wrapper>
      <HStack space="md">
        <Button>
          <InfoIcon mr="$2" color="$white" />
          <Button.Text>LeftIcon</Button.Text>
        </Button>
        <Button>
          <Button.Text>RightIcon</Button.Text>
          <AddIcon ml="$2" color="$white" />
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
