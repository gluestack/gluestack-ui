import type { ComponentMeta } from '@storybook/react-native';
import { InputStory as Input } from './Input';

const MyInputMeta: ComponentMeta<typeof Input> = {
  title: 'stories/FORMS/Input',
  component: Input,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    style: {
      control: 'select',
      options: ['outline', 'underlined', 'rounded'],
    },
    isInvalid: {
      control: 'boolean',
      options: [true, false],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: { size: 'md', style: 'outline', isInvalid: false, isDisabled: false },
};

export default MyInputMeta;

export { Input };
