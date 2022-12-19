import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example } from './Button';
// import { CustomButtonBasicExample } from './CustomButton';

const MyButtonMeta: ComponentMeta<typeof Example> = {
  title: 'Button',
  component: Example,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof Example>;
// type MyCustomButtonStory = ComponentStory<typeof CustomButtonBasicExample>;

export const Basic: MyButtonStory = (args) => <Example {...args} />;
// export const Basic1: MyCustomButtonStory = (args) => (
//   <CustomButtonBasicExample {...args} />
// );
