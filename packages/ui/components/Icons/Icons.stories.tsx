import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example as BasicExample } from './Basic';

const MyIconsMeta: ComponentMeta<typeof BasicExample> = {
  title: 'Icons',
  component: BasicExample,
  argTypes: {},
  args: {},
};

export default MyIconsMeta;

type MyCustomIconsStory = ComponentStory<typeof BasicExample>;

export const AllIcons: MyCustomIconsStory = (args) => (
  <BasicExample {...args} />
);
