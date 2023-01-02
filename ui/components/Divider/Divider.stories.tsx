import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Divider, HStack, Text, VStack } from '@gluestack/ui';

const MyDividerMeta: ComponentMeta<typeof Divider> = {
  title: 'DATA DISPLAY/Divider',
  component: Divider,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
};

export default MyDividerMeta;

type MyDividerStory = ComponentStory<typeof Divider>;

export const Basic: MyDividerStory = ({ ...props }) => {
  return (
    <VStack>
      <HStack sx={{ style: { h: '40px' } }}>
        <Text>Men</Text>
        <Divider variant="vertical" {...props} />
        <Text>Women</Text>
      </HStack>

      <VStack sx={{ style: { w: '100px' } }}>
        <Text>Men</Text>
        <Divider variant="horizontal" />
        <Text>Women</Text>
      </VStack>
    </VStack>
  );
};
