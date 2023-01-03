import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Center, Text } from '@gluestack/ui';
import Wrapper from '../Wrapper';

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
    <Wrapper>
      <Center sx={{ style: { bg: '$purple500', h: 200, w: 200 } }}>
        <Text sx={{ style: { color: 'white', fontWeight: 'bold' } }} {...props}>
          CENTERED
        </Text>
      </Center>
    </Wrapper>
  );
};
