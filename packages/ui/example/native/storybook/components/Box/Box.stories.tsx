import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { MyButton } from './Button';
import { CustomButtonBasicExample } from './CustomButton';

const MyButtonMeta: ComponentMeta<typeof MyButton> = {
  title: 'Box',
  component: MyButton,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof MyButton>;
type MyCustomButtonStory = ComponentStory<typeof CustomButtonBasicExample>;

export const Basic: MyButtonStory = (args) => <MyButton {...args} />;
export const Basic1: MyCustomButtonStory = (args) => (
  <CustomButtonBasicExample {...args} />
);
