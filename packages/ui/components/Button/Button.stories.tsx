import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Button } from '@gluestack/ui';

const MyButtonMeta: ComponentMeta<typeof Button> = {
  title: 'FORMS/Button',
  component: Button,
  args: {
    text: 'Button Text',
    variant: 'solid',
    size: 'md',
    isLoading: false,
    leftIcon: false,
    rightIcon: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'subtle', 'outline', 'ghost', 'link'],
      description: 'The variant of the button style to use.',
      table: {
        defaultValue: { summary: 'solid' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'The size of the button.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    isLoading: {
      control: 'boolean',
      description: 'If true, the button will show a spinner.',
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
    },
    leftIcon: {
      control: 'boolean',
      description: 'The left icon element to use in the button.',
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
    },
    rightIcon: {
      control: 'boolean',
      description: 'The right icon element to use in the button.',
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
    },
  },
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof Button>;

export { Basic } from './Basic';

export { ButtonWithIcons } from './ButtonWithIcon';

// export { ButtonGroup } from './ButtonGroup';

export { Variants } from './Variants';

export { Sizes } from './Sizes';

export { Loading } from './Loading';
