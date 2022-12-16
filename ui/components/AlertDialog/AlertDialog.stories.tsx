import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { AlertDialogComponent } from './AlertDialog';

const AlertDialogMeta: ComponentMeta<typeof AlertDialogComponent> = {
  title: 'AlertDialog',
  component: AlertDialogComponent,
  argTypes: {
    // onPress: { action: 'pressed the button' },
  },
  args: {
    // text: 'Hello world',
  },
};

export default AlertDialogMeta;

type AlertDialogStory = ComponentStory<typeof AlertDialogComponent>;

export const Basic: AlertDialogStory = (args) => (
  <AlertDialogComponent {...args} />
);
// export const Basic1: MyCustomButtonStory = (args) => (
//   <CustomButtonBasicExample {...args} />
// );
