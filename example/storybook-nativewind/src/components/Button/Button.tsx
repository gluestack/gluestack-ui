import React from 'react';

import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
} from '@/components/ui/Button';

export const ButtonBasic = (props: any) => {
  return (
    <>
      <Button {...props}>
        <ButtonText>Hello World</ButtonText>
      </Button>
    </>
  );
};

ButtonBasic.description =
  'This is a basic Button component example.  A button is a component that users can tap to trigger an action.';

export default ButtonBasic;

export { Button, ButtonText, ButtonSpinner, ButtonIcon };
