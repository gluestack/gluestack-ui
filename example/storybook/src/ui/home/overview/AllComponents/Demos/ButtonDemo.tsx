import { Button, ButtonText } from '@gluestack-ui/themed';
import React from 'react';

const ButtonDemo = () => {
  return (
    <Button
      variant="solid"
      bg="$success700"
      borderColor="$success700"
      sx={{
        ':hover': {
          bg: '$success800',
        },
        ':active': {
          bg: '$success700',
        },
      }}
    >
      <ButtonText fontSize="$sm" fontWeight="$medium">
        Submit
      </ButtonText>
    </Button>
  );
};

export default ButtonDemo;
