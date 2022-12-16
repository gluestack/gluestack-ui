import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example as BasicExample } from './Basic';
import { Example as FallbackExample } from './Fallback';

const MyImageMeta: ComponentMeta<typeof BasicExample> = {
  title: 'Image',
  component: BasicExample,
  argTypes: {},
  args: {},
};

export default MyImageMeta;

type MyCustomImageStory = ComponentStory<typeof BasicExample>;

export const Basic: MyCustomImageStory = (args) => <BasicExample {...args} />;
export const Fallback: MyCustomImageStory = (args) => (
  <FallbackExample {...args} />
);
