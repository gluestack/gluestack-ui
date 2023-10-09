import React from 'react';
import { AddIcon, InfoIcon, HStack } from '@gluestack-ui/themed';
import { Button, ButtonIcon, ButtonText } from '@gluestack-ui/themed';

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

export default ButtonWithIcons;
