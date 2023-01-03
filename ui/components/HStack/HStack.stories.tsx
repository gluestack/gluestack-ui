import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Heading, HStack, Box } from '@gluestack/ui';
import Wrapper from '../Wrapper';

const HStackMeta: ComponentMeta<typeof HStack> = {
  title: 'LAYOUT/HStack',
  component: HStack,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  args: {
    size: 'sm',
  },
};

export default HStackMeta;

type MyBadgeStory = ComponentStory<typeof HStack>;

export const Basic: MyBadgeStory = ({ size, ...props }) => {
  return (
    <Wrapper>
      <Heading>HStack</Heading>
      <HStack space={size}>
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue300' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue400' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue500' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue600' } }} />
      </HStack>
      <Heading>HStack reversed</Heading>
      <HStack space={size} reversed>
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue300' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue400' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue500' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue600' } }} />
      </HStack>
    </Wrapper>
  );
};
