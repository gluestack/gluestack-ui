import type { ComponentStory } from '@storybook/react-native';
import { Button } from '@gluestack/ui-compiled';
import { VStack } from '@gluestack/ui-compiled';
import { Center } from '@gluestack/ui-compiled';
import Wrapper from '../Wrapper';
import React from 'react';

type MyButtonStory = ComponentStory<typeof Button>;

export const ButtonStylesExample: MyButtonStory = ({}) => {
  const styles = ['solid', 'outline', 'link'];
  return (
    <Wrapper>
      <Center>
        <VStack space="md">
          {styles.map((style: any) => {
            return (
              <Button style={style} mt="$4">
                <Button.Text>{style}</Button.Text>
              </Button>
            );
          })}
        </VStack>
      </Center>
    </Wrapper>
  );
};
