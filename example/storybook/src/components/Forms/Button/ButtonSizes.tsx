import React from 'react';
import {
  Button,
  ButtonText,
  ButtonIcon,
  VStack,
  AddIcon,
} from '@gluestack-ui/themed';

const ButtonAllSizes = ({}) => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
  return (
    <VStack space="md" justifyContent="center" alignItems="center">
      {sizes.map((size: any) => {
        return (
          <Button mt="$4" size={size} key={size}>
            <ButtonText>Button</ButtonText>
            <ButtonIcon as={AddIcon} ml="$2" />
          </Button>
        );
      })}
    </VStack>
  );
};

export default ButtonAllSizes;
