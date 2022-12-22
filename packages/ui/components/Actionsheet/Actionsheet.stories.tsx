import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { BasicExample } from './Basic';

const MyActionsheetMeta: ComponentMeta<typeof BasicExample> = {
  title: 'Actionsheet',
  component: BasicExample,
  argTypes: {},
  args: {},
  parameters: {
    docs: {
      description: {
        component: 'Some component **markdown**',
      },
    },
  },
};

export default MyActionsheetMeta;

type MyActionsheetStory = ComponentStory<typeof BasicExample>;

export const Basic: MyActionsheetStory = () => <BasicExample />;
