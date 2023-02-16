import React from 'react';
import type { ComponentStory } from '@storybook/react-native';
import { Button } from '@gluestack/ui-compiled';
import { HStack } from '@gluestack/ui-compiled';
import Wrapper from '../Wrapper';

type MyButtonStory = ComponentStory<typeof Button>;
// type MyButtonGroupStory = ComponentStory<typeof Button>;

export const ButtonIsLoadingExample: MyButtonStory = ({}) => {
  const [isLoading] = React.useState(true);
  return (
    <Wrapper>
      <HStack space="md">
        <Button
          disabled={isLoading}
          focusable={!isLoading}
          opacity={isLoading ? 0.4 : 1}
        >
          <Button.Spinner color="white" />
        </Button>
        <Button
          disabled={isLoading}
          focusable={!isLoading}
          opacity={isLoading ? 0.4 : 1}
        >
          <Button.Spinner color="white" mr="$2" />
          <Button.Text>Submitting</Button.Text>
        </Button>
        <Button
          disabled={isLoading}
          focusable={!isLoading}
          opacity={isLoading ? 0.4 : 1}
        >
          <Button.Text>Submitting</Button.Text>
          <Button.Spinner color="white" ml="$2" />
        </Button>
      </HStack>
    </Wrapper>
  );
};
