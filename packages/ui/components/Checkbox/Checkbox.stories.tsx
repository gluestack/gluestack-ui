import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { CheckboxGroup } from './CheckboxGroup';

const MyCheckboxMeta: ComponentMeta<typeof CheckboxGroup> = {
  title: 'Checkbox',
  component: CheckboxGroup,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
};

export default MyCheckboxMeta;

type MyCheckboxStory = ComponentStory<typeof CheckboxGroup>;
// type CheckBoxGroupStory = ComponentStory<typeof CheckboxGroup>;

export const Basic: MyCheckboxStory = (args) => <CheckboxGroup {...args} />;
// export const CheckboxGroupExample: CheckBoxGroupStory = (args) => (
//   <CheckboxGroup />
// );
