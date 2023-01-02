import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Image, Input } from '@gluestack/ui';

const MyInputMeta: ComponentMeta<typeof Input> = {
  title: 'FORMS/Input',
  component: Input,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    variant: {
      control: 'select',
      options: ['outline', 'filled', 'underlined', 'unstyled', 'rounded'],
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

type MyCustomInputStory = ComponentStory<typeof Input>;

export const Basic: MyCustomInputStory = ({
  variant,
  isInvalid,
  isDisabled,
  size,
  ...props
}) => {
  return (
    <Input.Root
      variant={variant}
      size={size}
      isInvalid={isInvalid}
      isDisabled={isDisabled}
    >
      <Input placeholder="Enter text here" {...props} />
    </Input.Root>
  );
};
