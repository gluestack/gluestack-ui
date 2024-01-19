import React from 'react';
import { AddIcon, InfoIcon, HStack } from '@custom-ui/themed';
import { Button, ButtonIcon, ButtonText } from '@custom-ui/themed';

const ButtonWithIcons = ({}) => {
  return (
    <HStack space="md">
      <Button gap="$2">
        <ButtonIcon as={InfoIcon} />
        <ButtonText>LeftIcon</ButtonText>
      </Button>
      <Button variant="solid" gap="$2">
        <ButtonText>RightIcon</ButtonText>
        <ButtonIcon as={AddIcon} />
      </Button>
    </HStack>
  );
};

ButtonWithIcons.description =
  'This is an example of a Button with icons.  A button is a component that users can tap to trigger an action.';

export default ButtonWithIcons;
