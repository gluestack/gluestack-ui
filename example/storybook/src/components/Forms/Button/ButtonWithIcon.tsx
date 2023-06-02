import React from 'react';
import type { ComponentStory } from '@storybook/react-native';
import { AddIcon, InfoIcon, HStack } from '../../../ui-components';
import { Button } from '../../../ui-components';
import Wrapper from '../../Wrapper';
type MyButtonStory = ComponentStory<typeof Button>;
// type MyButtonGroupStory = ComponentStory<typeof Button>;

export const ButtonWithIconsTemp: MyButtonStory = ({}) => {
  return (
    <Wrapper>
      <HStack space="md">
        <Button>
          <Button.Icon as={InfoIcon} color="$white" mr="$2" />
          <Button.Text>LeftIcon</Button.Text>
        </Button>
        <Button variant="solid">
          <Button.Text>RightIcon</Button.Text>
          <Button.Icon as={AddIcon} color="$white" ml="$2" />
        </Button>
      </HStack>
    </Wrapper>
  );
};
