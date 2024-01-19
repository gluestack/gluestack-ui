import type { ComponentMeta } from '@storybook/react-native';
import Input from './Input';
import InputIcon from './InputIcon';

const InputMeta: ComponentMeta<typeof Input> = {
  title: 'components/PRIMITIVES/Input',
  component: Input,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `The Input component is your go-to tool for gathering user input in a sleek and user-friendly text field. Whether you're designing a simple login form or a complex search feature, this component has got you covered.`,
  },
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
