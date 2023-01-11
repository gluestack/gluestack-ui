import React from 'react';
import type { ComponentStory } from '@storybook/react-native';
import { Button, VStack, Center, AddIcon } from '@gluestack/design-system';
import Wrapper from '../Wrapper';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonSizes: MyButtonStory = ({}) => {
  const sizes = ['xs', 'sm', 'md', 'lg'];
  return (
    <Wrapper>
      <Center>
        <VStack
          space="md"
          sx={{ style: { justifyContent: 'center', alignItems: 'center' } }}
        >
          {sizes.map((size) => {
            return (
              <Button size={size} key={size}>
                <Button.Text>Button</Button.Text>
                <AddIcon ml="$2" />
              </Button>
            );
          })}
        </VStack>
      </Center>
    </Wrapper>
  );
};

export const Sizes = ButtonSizes.bind({});

Sizes.parameters = {
  controls: {
    exclude: /.*/g,
  },
};
