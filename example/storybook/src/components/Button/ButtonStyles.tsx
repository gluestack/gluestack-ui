import type { ComponentStory } from '@storybook/react-native';
import { Button } from '../../ui-components';
import { Center, VStack } from '../../ui-components';
import Wrapper from '../Wrapper';
import React from 'react';

type MyButtonStory = ComponentStory<typeof Button>;

export const ButtonStylesExample: MyButtonStory = ({}) => {
  const variants = ['solid', 'outline', 'link'];
  return (
    <Wrapper>
      <Center>
        <VStack space="md">
          {variants.map((variant: any) => {
            return (
              <Button variant={variant} mt="$4">
                <Button.Text>{variant}</Button.Text>
              </Button>
            );
          })}
        </VStack>
      </Center>
    </Wrapper>
  );
};
