import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Center, Text } from '@gluestack/ui';

const MyCenterMeta: ComponentMeta<typeof Center> = {
  title: 'LAYOUT/Center',
  component: Center,
  argTypes: {},
  args: {},
};

export default MyCenterMeta;

type MyCustomCenterStory = ComponentStory<typeof Center>;

export const Basic: MyCustomCenterStory = ({ ...props }) => {
  return (
    <Center sx={{ style: { bg: '$purple500', h: 200, w: 200 } }}>
      <Text sx={{ style: { color: 'white', fontWeight: 'bold' } }} {...props}>
        CENTERED
      </Text>
    </Center>
  );
};
