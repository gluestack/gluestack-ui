import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Basic as BasicExample } from './Basic';

import { View } from 'react-native';
import Wrapper from '../Wrapper';
const MySwitchMeta: ComponentMeta<typeof BasicExample> = {
  title: 'FEEDBACK/Toast',
  component: BasicExample,
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top',
        'top-right',
        'top-left',
        'bottom',
        'bottom-left',
        'bottom-right',
      ],
    },
  },
  args: {
    placement: 'bottom',
  },
  parameters: {
    docs: {
      description: {
        component: `**Toast** displays alerts on top of an overlay. The **Toast** terminates itself when the close button is clicked or after a preset timeout — the default is 5 seconds. The component also allows users to give feedback when an action is completed.
        Toasts can also be configured to pop up at different areas of the application window—top or bottom. More than one instance of toast can be present onscreen at one time.`,
      },
    },
  },
};

export default MySwitchMeta;

type BasicSwitch = ComponentStory<typeof BasicExample>;

export const Basic: BasicSwitch = (args) => (
  <Wrapper>
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BasicExample {...args} />
    </View>
  </Wrapper>
);
