import React from 'react';
import { Button, ButtonText } from '@gluestack/ui';

function ButtonBasicExample() {
  return (
    <Button
      onPress={() => console.log('Hello world!')}
      sx={{
        style: {
          bg: '$pink.400',
        },
      }}
      variant="blueBox"
      size="medium"
    >
      <ButtonText>Click me</ButtonText>
    </Button>
  );
}

export default ButtonBasicExample;
