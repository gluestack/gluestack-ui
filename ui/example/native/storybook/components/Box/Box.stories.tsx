import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example as BasicExample } from './Basic';
import { Example as WithRefExample } from './WithRef';

const MyBoxMeta: ComponentMeta<typeof BasicExample> = {
  title: 'Box',
  component: BasicExample,
  argTypes: {},
  args: {},
};

export default MyBoxMeta;

type MyCustomBoxStory = ComponentStory<typeof BasicExample>;

export const Basic: MyCustomBoxStory = (args) => <BasicExample {...args} />;
export const WithRef: MyCustomBoxStory = (args) => <WithRefExample {...args} />;
