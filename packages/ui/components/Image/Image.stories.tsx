import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example as BasicExample } from './Basic';

const MyImageMeta: ComponentMeta<typeof BasicExample> = {
  title: 'Image',
  component: BasicExample,
  argTypes: {},
  args: {
    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    fallbackSource: 'https://www.w3schools.com/css/img_lights.jpg',
  },
};

export default MyImageMeta;

type MyCustomImageStory = ComponentStory<typeof BasicExample>;

export const Basic: MyCustomImageStory = (args) => <BasicExample {...args} />;
