import type { ComponentMeta } from '@storybook/react-native';
import Input from './Input';
import InputIcon from './InputIcon';

const InputMeta: ComponentMeta<typeof Input> = {
  title: 'stories/FORMS/Input',
  component: Input,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: ['outline', 'underlined', 'rounded'],
    },
    isInvalid: {
      control: 'boolean',
      options: [true, false],
    },
    isHovered: {
      control: 'boolean',
      options: [true, false],
    },
    isFocused: {
      control: 'boolean',
      options: [true, false],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    size: 'sm',
    variant: 'outline',
    isInvalid: false,
    isDisabled: false,
    isHovered: false,
    isFocused: false,
  },
};

export default InputMeta;

export { Input, InputIcon };
