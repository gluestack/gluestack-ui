import React from 'react';
import type { ComponentStory } from '@storybook/react-native';
import { AddIcon, InfoIcon } from '@gluestack/ui-compiled';
import { Button } from '@gluestack/ui-compiled';
import { HStack } from '@gluestack/ui-compiled';
import Wrapper from '../Wrapper';
type MyButtonStory = ComponentStory<typeof Button>;
// type MyButtonGroupStory = ComponentStory<typeof Button>;

export const ButtonWithIconsTemp: MyButtonStory = ({}) => {
  return (
    <Wrapper>
      <HStack space="md">
        <Button>
          <InfoIcon mr="$2" color="$white" />
          <Button.Text>LeftIcon</Button.Text>
        </Button>
        <Button style="solid">
          <Button.Text>RightIcon</Button.Text>
          <AddIcon ml="$2" color="$white" />
        </Button>
      </HStack>
    </Wrapper>
  );
};
