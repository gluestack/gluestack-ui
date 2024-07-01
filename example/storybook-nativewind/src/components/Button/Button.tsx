import React from 'react';
import { AddIcon } from '@/components/ui/icon';
import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
} from '@/components/ui/button';
// import { useColorMode } from '@/hooks/useColorMode';

export const ButtonBasic = (props: any) => {
  // const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {/* <Button {...props} onPress={toggleColorMode}>  //testing hook
        <ButtonText>{colorMode}</ButtonText>
        <ButtonIcon as={AddIcon} />
      </Button> */}
      <Button {...props}>
        <ButtonText>Button</ButtonText>
        <ButtonIcon as={AddIcon} />
      </Button>
    </>
  );
};

ButtonBasic.description =
  'This is a basic Button component example.  A button is a component that users can tap to trigger an action.';

export default ButtonBasic;

export { Button, ButtonText, ButtonSpinner, ButtonIcon };
