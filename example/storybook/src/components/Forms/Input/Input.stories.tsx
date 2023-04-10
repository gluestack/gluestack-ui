import type { ComponentMeta } from '@storybook/react-native';
import { InputStory as Input } from './Input';
import { InputStory as InputIcon } from './InputIcon';

const MyInputMeta: ComponentMeta<typeof Input> = {
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
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: { size: 'md', variant: 'outline', isInvalid: false, isDisabled: false },
};

export default MyInputMeta;

export { Input, InputIcon };
