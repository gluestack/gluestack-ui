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
    // @ts-ignore
    text: 'Button',
    size: 'md',
  },
  argTypes: {
    action: {
      control: 'select',
      description: 'The action of button.',
      options: ['primary', 'secondary', 'positive', 'negative'],
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    variant: {
      control: 'select',
      options: ['link', 'outline', 'solid'],
      description: 'The style of button.',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the button.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
};

const ButtonLoading = ButtonIsLoadingExample.bind({});

ButtonLoading.parameters = {
  controls: {
    exclude: /.*/g,
  },
};

const ButtonSizes = ButtonSizesExample.bind({});

ButtonSizes.parameters = {
  controls: {
    exclude: /.*/g,
  },
};

const ButtonStyles = ButtonStylesExample.bind({});

ButtonStyles.parameters = {
  controls: {
    exclude: /.*/g,
  },
};

const ButtonWithIcon = ButtonWithIconsTemp.bind({});

ButtonWithIcon.parameters = {
  controls: {
    exclude: /.*/g,
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
