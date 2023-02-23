// @ts-nocheck
import React from 'react';
import type { ComponentStory } from '@storybook/react-native';
// @ts-ignore

import { Button } from './Button';
import { VStack } from '../VStack/VStack';
import { AddIcon } from '../Icons/Icons';
import { Center } from '../Center/Center';

import Wrapper from '../Wrapper';

type MyButtonStory = ComponentStory<typeof Button>;

export const ButtonSizesExample: MyButtonStory = ({}) => {
  const sizes = ['xs', 'sm', 'md', 'lg'];
  return (
    <Wrapper>
      <Center>
        <VStack space="md" justifyContent="center" alignItems="center">
          {sizes.map((size) => {
            return (
              <Button mt="$4" size={size} key={size}>
                <Button.Text>Button</Button.Text>
                <AddIcon ml="$2" size="$sm" color="$white" />
              </Button>
            );
          })}
        </VStack>
      </Center>
    </Wrapper>
  );
};
