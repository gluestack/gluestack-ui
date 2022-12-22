import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example } from './Alert';
// import { CustomAlertBasicExample } from './CustomAlert';

const MyAlertMeta: ComponentMeta<typeof Example> = {
  title: 'Alert',
  component: Example,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'subtle-info',
        'solid-info',
        'outline-info',
        'left-accent-info',
        'top-accent-info',
        'outline-light-info',
        'subtle-success',
        'solid-success',
        'outline-success',
        'left-accent-success',
        'top-accent-success',
        'outline-light-success',
        'subtle-warning',
        'solid-warning',
        'outline-warning',
        'left-accent-warning',
        'top-accent-warning',
        'outline-light-warning',
        'subtle-error',
        'solid-error',
        'outline-error',
        'left-accent-error',
        'top-accent-error',
        'outline-light-error',
      ],
    },
  },
  args: {
    variant: 'subtle-success',
  },
};

export default MyAlertMeta;

type MyAlertStory = ComponentStory<typeof Example>;

export const Basic: MyAlertStory = (args) => <Example {...args} />;
