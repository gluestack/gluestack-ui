import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example } from './Alert';
// import { CustomAlertBasicExample } from './CustomAlert';

const MyAlertMeta: ComponentMeta<typeof Example> = {
  title: 'Alert',
  component: Example,
  argTypes: {
    onPress: { action: 'pressed the Alert' },
  },
  args: {
    text: 'Hello world',
  },
};

export default MyAlertMeta;

type MyAlertStory = ComponentStory<typeof Example>;
// type MyCustomAlertStory = ComponentStory<typeof CustomAlertBasicExample>;

export const Basic: MyAlertStory = (args) => <Example {...args} />;
// export const Basic1: MyCustomAlertStory = (args) => (
//   <CustomButtonBasicExample {...args} />
// );
