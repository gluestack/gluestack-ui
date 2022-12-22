import React from 'react';
import { Example } from './Basic';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

const MySpinnerMeta: ComponentMeta<typeof Example> = {
  title: 'Spinner',
  component: Example,
  argTypes: {},
  args: {},
};

export default MySpinnerMeta;

type MyCustomSelectStory = ComponentStory<typeof Example>;

export const Basic: MyCustomSelectStory = (args) => <Example {...args} />;
