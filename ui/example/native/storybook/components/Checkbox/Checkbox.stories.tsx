import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { MyCheckbox } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup';

const MyCheckboxMeta: ComponentMeta<typeof MyCheckbox> = {
  title: 'Checkbox',
  component: MyCheckbox,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
};

export default MyCheckboxMeta;

type MyCheckboxStory = ComponentStory<typeof MyCheckbox>;
type CheckBoxGroupStory = ComponentStory<typeof CheckboxGroup>;
// type MyCustomButtonStory = ComponentStory<typeof CustomButtonBasicExample>;

export const Basic: MyCheckboxStory = (args) => <MyCheckbox />;
export const CheckboxGroupExample: CheckBoxGroupStory = (args) => (
  <CheckboxGroup />
);
// export const Basic1: MyCustomButtonStory = (args) => (
//   <CustomButtonBasicExample {...args} />
// );
