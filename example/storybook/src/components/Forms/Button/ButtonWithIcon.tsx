import React from 'react';
import { AddIcon, InfoIcon, HStack } from '@gluestack-ui/themed';
import { Button, ButtonIcon, ButtonText } from '@gluestack-ui/themed';

const ButtonWithIcons = ({}) => {
  return (
    <HStack space="md">
      <Button>
        <ButtonIcon as={InfoIcon} mr="$2" />
        <ButtonText>LeftIcon</ButtonText>
      </Button>
      <Button variant="solid">
        <ButtonText>RightIcon</ButtonText>
        <ButtonIcon as={AddIcon} ml="$2" />
      </Button>
    </HStack>
  );
};

ButtonWithIcons.description =
  'This is an example of a Button with icons.  A button is a component that users can tap to trigger an action.';

export default ButtonWithIcons;
