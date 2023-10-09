import React from 'react';

import { HStack } from '@gluestack-ui/themed';
import { Button, ButtonSpinner, ButtonText } from '@gluestack-ui/themed';

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
      >
        <ButtonSpinner color="white" mr="$2" />
        <ButtonText>Submitting</ButtonText>
      </Button>
      <Button
        disabled={isLoading}
        focusable={!isLoading}
        opacity={isLoading ? 0.4 : 1}
        action="negative"
      >
        <ButtonText>Submitting</ButtonText>
        <ButtonSpinner color="white" ml="$2" />
      </Button>
    </HStack>
  );
};

ButtonIsLoading.description =
  'This is an example of a Button with a loading state.  A button is a component that users can tap to trigger an action.';

export default ButtonIsLoading;
