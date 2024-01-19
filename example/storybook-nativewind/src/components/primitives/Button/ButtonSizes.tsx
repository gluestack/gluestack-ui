import React from 'react';
import {
  Button,
  ButtonText,
  ButtonIcon,
  VStack,
  AddIcon,
} from '@custom-ui/themed';

const ButtonAllSizes = ({}) => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
  return (
    <VStack space="md" justifyContent="center" alignItems="center">
      {sizes.map((size: any) => {
        return (
          <Button mt="$4" size={size} key={size} gap="$2">
            <ButtonText>Button</ButtonText>
            <ButtonIcon as={AddIcon} />
          </Button>
        );
      })}
    </VStack>
  );
};

export default ButtonAllSizes;
