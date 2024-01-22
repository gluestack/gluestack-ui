import React from 'react';
import { Button, ButtonText } from '@components/Button';
import { Text } from 'react-native';
export const ButtonBasic = () => {
  return (
    <>
      <Button variant="outline">
        <ButtonText>Hello world</ButtonText>
      </Button>
      <Text className="dark:text-white text-red-500">Hello world</Text>
    </>
  );
};

ButtonBasic.description =
  'This is a basic Button component example.  A button is a component that users can tap to trigger an action.';

export default ButtonBasic;

export { Button, ButtonText };
