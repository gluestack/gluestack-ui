import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Wrapper from './../Wrapper';
import { VStack, Box } from '@gluestack/ui';

const VStackMeta: ComponentMeta<typeof VStack> = {
  title: 'LAYOUT/VStack',
  component: VStack,
  argTypes: {
    space: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  args: {
    space: 'sm',
  },
  parameters: {
    docs: {
      description: {
        component: '**VStack** aligns items vertically.',
      },
    },
  },
};

export default VStackMeta;

type VstackStory = ComponentStory<typeof VStack>;

export const Basic: VstackStory = ({ space, ...props }) => {
  return (
    <Wrapper>
      <VStack
        space={space}
        //@ts-ignore
        sx={{ style: { justifyContent: 'center', alignItems: 'center' } }}
      >
        <Box
          sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue300' } }}
        />
        <Box
          sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue400' } }}
        />
        <Box
          sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue500' } }}
        />
        <Box
          sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue600' } }}
        />
      </VStack>
    </Wrapper>
  );
};
