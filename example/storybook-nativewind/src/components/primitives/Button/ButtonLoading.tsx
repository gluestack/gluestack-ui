import React from 'react';

import { HStack } from '@custom-ui/themed';
import { Button, ButtonSpinner, ButtonText } from '@custom-ui/themed';

const ButtonIsLoading = ({}) => {
  const [isLoading] = React.useState(true);
  return (
    <HStack space="md">
      <Button
        disabled={isLoading}
        focusable={!isLoading}
        opacity={isLoading ? 0.4 : 1}
        action="negative"
      >
        <ButtonSpinner color="white" />
      </Button>
      <Button
        disabled={isLoading}
        focusable={!isLoading}
        opacity={isLoading ? 0.4 : 1}
        action="negative"
        gap="$2"
      >
        <ButtonSpinner color="white" />
        <ButtonText>Submitting</ButtonText>
      </Button>
      <Button
        disabled={isLoading}
        focusable={!isLoading}
        opacity={isLoading ? 0.4 : 1}
        action="negative"
        gap="$2"
      >
        <ButtonText>Submitting</ButtonText>
        <ButtonSpinner color="white" />
      </Button>
    </HStack>
  );
};

ButtonIsLoading.description =
  'This is an example of a Button with a loading state.  A button is a component that users can tap to trigger an action.';

export default ButtonIsLoading;
