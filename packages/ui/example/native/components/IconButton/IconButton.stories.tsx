import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { IconButtonExample } from './IconButton';

const IconButtonMeta: ComponentMeta<typeof IconButtonExample> = {
  title: 'IconButton',
  component: IconButtonExample,
  argTypes: {},
  args: {},
};

export default IconButtonMeta;

type MyBadgeStory = ComponentStory<typeof IconButtonExample>;

export const Basic: MyBadgeStory = (args) => <IconButtonExample {...args} />;
