import type { ComponentMeta } from '@storybook/react-native';
import Button from './Button';
import ButtonIsLoadingExample from './ButtonLoading';
import ButtonSizesExample from './ButtonSizes';
import ButtonStylesExample from './ButtonStyles';
import ButtonWithIconsTemp from './ButtonWithIcon';

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: 'stories/FORMS/Button',
  component: Button,
  args: {
    action: 'primary',
    variant: 'solid',
    size: 'md',
    isHovered: false,
    isPressed: false,
    isFocusVisible: false,
    isDisabled: false,
  },
  argTypes: {
    action: {
      control: 'select',
      options: ['primary', 'secondary', 'positive', 'negative'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'link'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    isHovered: {
      control: 'boolean',
      options: [true, false],
    },
    isPressed: {
      control: 'boolean',
      options: [true, false],
    },
    isFocusVisible: {
      control: 'boolean',
      options: [true, false],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
  },
};

export default ButtonMeta;

export {
  Button,
  ButtonIsLoadingExample,
  ButtonSizesExample,
  ButtonStylesExample,
  ButtonWithIconsTemp,
};
