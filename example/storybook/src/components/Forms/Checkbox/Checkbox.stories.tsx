import type { ComponentMeta } from '@storybook/react-native';
import { CheckboxExample as Checkbox } from './Checkbox';

const MyCheckboxMeta: ComponentMeta<typeof Checkbox> = {
  title: 'stories/FORMS/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button.',
      table: {
        defaultValue: { summary: 'md' },
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
export { Checkbox };
