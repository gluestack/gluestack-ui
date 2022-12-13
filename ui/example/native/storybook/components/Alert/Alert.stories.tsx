import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { MyAlertExample } from './Alert';

const MyAlertMeta: ComponentMeta<typeof MyAlertExample> = {
  title: 'Alert',
  component: MyAlertExample,
  argTypes: {
    onPress: { action: 'pressed the Alert' },
  },
  args: {
    text: 'Hello world',
  },
};

export default MyAlertMeta;

type MyAlertStory = ComponentStory<typeof MyAlertExample>;

export const Basic: MyAlertStory = (args) => <MyAlertExample {...args} />;
