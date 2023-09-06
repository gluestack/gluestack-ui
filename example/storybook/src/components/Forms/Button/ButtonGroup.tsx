import { Button, ButtonGroup, ButtonText } from '@gluestack-ui/themed';
import React from 'react';
const ButtonGroupBasic = ({ ...props }) => {
  return (
    // @ts-ignore
    <ButtonGroup {...props}>
      <Button>
        <ButtonText>Button 1</ButtonText>
      </Button>
      <Button>
        <ButtonText>Button 2</ButtonText>
      </Button>
      <Button>
        <ButtonText>Button 3</ButtonText>
      </Button>
    </ButtonGroup>
  );
};

export default ButtonGroupBasic;
