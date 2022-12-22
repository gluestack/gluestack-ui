import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { MyBadgeExample } from './Badge';

const MyButtonMeta: ComponentMeta<typeof MyBadgeExample> = {
  title: 'Badge',
  component: MyBadgeExample,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'subtle',
        'outline',
        'solid',
        'success-subtle',
        'success-outline',
        'success-solid',
        'danger-subtle',
        'danger-outline',
        'danger-solid',
        'info-subtle',
        'info-outline',
        'info-solid',
        'warning-subtle',
        'warning-outline',
        'warning-solid',
      ],
    },
  },
  args: {
    text: 'New feature',
    variant: 'subtle',
  },
};

export default MyButtonMeta;

type MyBadgeStory = ComponentStory<typeof MyBadgeExample>;

export const Basic: MyBadgeStory = (args) => <MyBadgeExample {...args} />;
