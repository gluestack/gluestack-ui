import { Button, ButtonText } from '@custom-ui/themed';
import { VStack } from '@custom-ui/themed';

import React from 'react';

const ButtonAllVariants = ({}) => {
  const variants = ['solid', 'outline', 'link'];
  return (
    <VStack space="md">
      {variants.map((variant: any) => {
        return (
          <Button variant={variant} mt="$4">
            <ButtonText>{variant}</ButtonText>
          </Button>
        );
      })}
    </VStack>
  );
};

export default ButtonAllVariants;
