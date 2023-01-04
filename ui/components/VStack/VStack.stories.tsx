import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Wrapper from './../Wrapper';
import { VStack, Box } from '@gluestack/ui';
import { Page } from '../../storybookDocsComponents/Page';

const VStackMeta: ComponentMeta<typeof VStack> = {
  title: 'LAYOUT/VStack',
  component: VStack,
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
            title="VStack"
            description="**VStack** aligns items vertically."
            componentName="VStack"
          ></Page>
        </>
      ),
    },
  },
};

export default VStackMeta;

type VstackStory = ComponentStory<typeof VStack>;

export const Basic: VstackStory = ({ space, reversed, ...props }) => {
  return (
    <VStack
      space={space}
      //@ts-ignore
      sx={{ style: { justifyContent: 'center', alignItems: 'center' } }}
      reversed={reversed}
    >
      <Box sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue300' } }} />
      <Box sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue400' } }} />
      <Box sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue500' } }} />
      <Box sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue600' } }} />
    </VStack>
  );
};

export { Reversed } from './Reversed';
