import React from 'react';
import { Button, ButtonText } from '@components/Button';

export const ButtonBasic = () => {
  return (
    <>
      <Button variant="outline">
        <ButtonText>Hello world</ButtonText>
      </Button>
    </>
  );
};

ButtonBasic.description =
  'This is a basic Button component example.  A button is a component that users can tap to trigger an action.';

export default ButtonBasic;

export { Button, ButtonText };
