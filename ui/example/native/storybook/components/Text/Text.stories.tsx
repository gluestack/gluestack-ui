import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example as BasicExample } from './Basic';

const MyTextMeta: ComponentMeta<typeof BasicExample> = {
  title: 'Text',
  component: BasicExample,
  argTypes: {},
  args: {},
};

export default MyTextMeta;

type MyCustomTextStory = ComponentStory<typeof BasicExample>;

export const Basic: MyCustomTextStory = (args) => <BasicExample {...args} />;
