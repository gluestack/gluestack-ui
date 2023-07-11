import React from 'react';
import type { ComponentStory } from '@storybook/react-native';
import { AddIcon, InfoIcon, HStack, Center } from '../../../ui-components';
import { Button } from '../../../ui-components';

type MyButtonStory = ComponentStory<typeof Button>;
// type MyButtonGroupStory = ComponentStory<typeof Button>;

export const ButtonWithIconsTemp: MyButtonStory = ({}) => {
  return (
    <Center>
      <HStack space="md">
        <Button>
          <Button.Icon as={InfoIcon} mr="$2" />
          <Button.Text>LeftIcon</Button.Text>
        </Button>
        <Button variant="solid">
          <Button.Text>RightIcon</Button.Text>
          <Button.Icon as={AddIcon} ml="$2" />
        </Button>
      </HStack>
    </Center>
  );
};
