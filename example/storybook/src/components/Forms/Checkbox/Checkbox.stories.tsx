import type { ComponentMeta } from '@storybook/react-native';
import Checkbox from './Checkbox';

const CheckboxMeta: ComponentMeta<typeof Checkbox> = {
  title: 'stories/FORMS/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isChecked: {
      type: 'boolean',
      options: [true, false],
    },
    isInvalid: {
      type: 'boolean',
      options: [true, false],
    },
    isDisabled: {
      type: 'boolean',
      options: [true, false],
    },
    isReadOnly: {
      type: 'boolean',
      figmaIgnore: true,
      options: [true, false],
    },
  },
  args: {
    size: 'md',
    isInvalid: false,
    isDisabled: false,
    isReadOnly: false,
    isChecked: false,
  },
};

export default CheckboxMeta;
export { Checkbox };
