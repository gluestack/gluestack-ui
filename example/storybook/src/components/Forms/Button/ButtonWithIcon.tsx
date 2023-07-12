import React from 'react';
import type { ComponentStory } from '@storybook/react-native';
import { AddIcon, InfoIcon, HStack } from '../../../ui-components';
import { Button } from '../../../ui-components';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonWithIconsTemp: MyButtonStory = ({}) => {
  return (
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
  );
};

export default ButtonWithIconsTemp;
