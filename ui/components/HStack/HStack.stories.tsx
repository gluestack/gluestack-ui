import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Heading, HStack, Box } from '@gluestack/ui';
import { Page } from '../../storybookDocsComponents/Page';

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
    <>
      <Heading>HStack</Heading>
      <HStack space={space} mt="$5" reversed={reversed}>
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue300' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue400' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue500' } }} />
        <Box sx={{ style: { w: 100, h: 100, bg: '$blue600' } }} />
      </HStack>
    </>
  );
};

export { Reversed } from './Reversed';
