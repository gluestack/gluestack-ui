import { Button, ButtonGroup, ButtonText } from '@custom-ui/themed';
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

ButtonGroupBasic.description =
  'This is a basic ButtonGroup component example. ButtonGroups are used to group related buttons together.';

export default ButtonGroupBasic;
