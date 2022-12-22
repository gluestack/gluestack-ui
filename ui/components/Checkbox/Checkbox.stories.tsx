import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example as CheckboxGroup } from './Checkbox';

const MyCheckboxMeta: ComponentMeta<typeof CheckboxGroup> = {
  title: 'Checkbox',
  component: CheckboxGroup,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    // value: {
    //   control: {
    //     type: 'check',
    //     options: ['Label 1', 'Label 2'],
    //   },
    // },
    isInvalid: {
      type: 'boolean',
    },
    isDisabled: {
      type: 'boolean',
    },
    isReadOnly: {
      type: 'boolean',
    },
  },
  args: {
    size: 'md',
    // value: ['Label 1'],
    isInvalid: false,
    isDisabled: false,
    isReadOnly: false,
  },
};

export default MyCheckboxMeta;

type MyCheckboxStory = ComponentStory<typeof CheckboxGroup>;
// type CheckBoxGroupStory = ComponentStory<typeof CheckboxGroup>;

export const Basic: MyCheckboxStory = (args) => <CheckboxGroup {...args} />;
// export const CheckboxGroupExample: CheckBoxGroupStory = (args) => (
//   <CheckboxGroup />
// );
