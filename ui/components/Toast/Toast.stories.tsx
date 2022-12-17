import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Basic as BasicExample } from './Basic';
import { Provider } from '@gluestack/ui';
import { View } from 'react-native';
const MySwitchMeta: ComponentMeta<typeof BasicExample> = {
  title: 'Toast',
  component: BasicExample,
  argTypes: {},
  args: {},
};

export default MySwitchMeta;

type BasicSwitch = ComponentStory<typeof BasicExample>;

export const Basic: BasicSwitch = () => (
  <Provider>
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
      <BasicExample />
    </View>
  </Provider>
);
