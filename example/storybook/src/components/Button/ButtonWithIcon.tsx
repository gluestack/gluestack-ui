import React from 'react';
import type { ComponentStory } from '@storybook/react-native';
import { AddIcon, InfoIcon } from '../Icons/Icons';
import { Button } from './Button';
import { HStack } from '../HStack/HStack';
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
        <Button variant="solid">
          <Button.Text>RightIcon</Button.Text>
          <AddIcon ml="$2" color="$white" />
        </Button>
      </HStack>
    </Wrapper>
  );
};
