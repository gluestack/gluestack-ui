import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
// import { MyRadio } from './Radio';
import { RadioGroup } from './RadioGroup';

const MyRadioMeta: ComponentMeta<typeof RadioGroup> = {
  title: 'Radio',
  component: RadioGroup,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
};

export default MyRadioMeta;

// type MyRadioStory = ComponentStory<typeof MyRadio>;
type RadioGroupStory = ComponentStory<typeof RadioGroup>;
// type MyCustomButtonStory = ComponentStory<typeof CustomButtonBasicExample>;

// export const Basic: MyRadioStory = (args) => <MyRadio />;
export const RadioGroupExample: RadioGroupStory = (args) => <RadioGroup />;
// export const Basic1: MyCustomButtonStory = (args) => (
//   <CustomButtonBasicExample {...args} />
// );
