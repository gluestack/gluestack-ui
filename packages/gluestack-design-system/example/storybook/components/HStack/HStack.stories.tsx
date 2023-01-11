import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Heading, HStack, Box } from '@gluestack/design-system';
import { Page } from '../../storybookDocsComponents/Page';
import Wrapper from '../Wrapper';

const HStackMeta: ComponentMeta<typeof HStack> = {
  title: 'LAYOUT/HStack',
  component: HStack,
  argTypes: {
    space: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    reversed: {
      control: 'boolean',
    },
  },
  args: {
    space: 'md',
    reversed: false,
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Page
            title="HStack"
            description="HStack aligns items horizontally."
            componentName="HStack"
          ></Page>
        </>
      ),
    },
  },
};

export default HStackMeta;

type MyHStackStory = ComponentStory<typeof HStack>;

export const Basic: MyHStackStory = ({ space, reversed, ...props }) => {
  return (
    <Wrapper>
      <Heading>HStack</Heading>
      <HStack space={space} mt="$5" reversed={reversed} {...props}>
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue300' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue400' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue500' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue600' } }} />
      </HStack>
    </Wrapper>
  );
};

export { Reversed } from './Reversed';
