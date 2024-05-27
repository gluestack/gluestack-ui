import type { ComponentMeta } from '@storybook/react-native';
import Checkbox from './Checkbox';

const CheckboxMeta: ComponentMeta<typeof Checkbox> = {
  title: 'stories/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
    isInvalid: {
      control: 'boolean',
      options: [true, false],
    },
    isFocusVisible: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    size: 'md',
    isDisabled: false,
    isInvalid: false,
    isFocusVisible: false,
  },
};

export default CheckboxMeta;
export { Checkbox };
