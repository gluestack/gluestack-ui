import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { BasicExample } from './Basic';

const MyActionsheetMeta: ComponentMeta<typeof BasicExample> = {
  title: 'Actionsheet',
  component: BasicExample,
  argTypes: {},
  args: {
    isOpen: false,
    closeOnOverlayClick: true,
  },
};

export default MyActionsheetMeta;

type MyActionsheetStory = ComponentStory<typeof BasicExample>;

export const Basic: MyActionsheetStory = (args) => <BasicExample {...args} />;
