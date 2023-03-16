import React from 'react';
import type { ComponentStory } from '@storybook/react-native';
import { AddIcon, InfoIcon, HStack, Icon } from '../../../ui-components';
import { Button } from '../../../ui-components';
import Wrapper from '../../Wrapper';
type MyButtonStory = ComponentStory<typeof Button>;
// type MyButtonGroupStory = ComponentStory<typeof Button>;

export const ButtonWithIconsTemp: MyButtonStory = ({}) => {
  return (
    <Wrapper>
      <HStack space="md">
        <Button>
          <Icon as={InfoIcon} mr="$2" color="$white" />
          <Button.Text>LeftIcon</Button.Text>
        </Button>
        <Button variant="solid">
          <Button.Text>RightIcon</Button.Text>
          <Icon as={AddIcon} ml="$2" color="$white" />
        </Button>
      </HStack>
    </Wrapper>
  );
};
