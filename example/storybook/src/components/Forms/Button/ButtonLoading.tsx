import React from 'react';
import type { ComponentStory } from '@storybook/react-native';

import { HStack } from '../../../ui-components';
import { Button, ButtonSpinner, ButtonText } from '../../../ui-components';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonIsLoadingExample: MyButtonStory = ({}) => {
  const [isLoading] = React.useState(true);
  return (
    <HStack space="md">
      <Button
        disabled={isLoading}
        focusable={!isLoading}
        opacity={isLoading ? 0.4 : 1}
      >
        <ButtonSpinner color="white" />
      </Button>
      <Button
        disabled={isLoading}
        focusable={!isLoading}
        opacity={isLoading ? 0.4 : 1}
      >
        <ButtonSpinner color="white" mr="$2" />
        <ButtonText>Submitting</ButtonText>
      </Button>
      <Button
        disabled={isLoading}
        focusable={!isLoading}
        opacity={isLoading ? 0.4 : 1}
      >
        <ButtonText>Submitting</ButtonText>
        <ButtonSpinner color="white" ml="$2" />
      </Button>
    </HStack>
  );
};

export default ButtonIsLoadingExample;
