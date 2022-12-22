import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Example as Grouped } from './ButtonGroup';
import { Button, Center, AddIcon, MinusIcon } from '@gluestack/ui';

const MyButtonMeta: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'subtle', 'outline', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    isLoading: {
      control: 'boolean',
    },
    leftIcon: {
      control: 'boolean',
    },
    rightIcon: {
      control: 'boolean',
    },
  },
  args: {
    text: 'Press me',
    variant: 'solid',
    size: 'md',
    isLoading: false,
    leftIcon: false,
    rightIcon: false,
  },
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof Button>;
type MyButtonGroupStory = ComponentStory<typeof Grouped>;

export const Basic: MyButtonStory = ({
  leftIcon,
  isLoading,
  rightIcon,
  text,
  ...props
}) => {
  return (
    <Center>
      <Button {...props}>
        {isLoading && <Button.Spinner />}
        {leftIcon && <MinusIcon />}
        <Button.Text>{text}</Button.Text>
        {rightIcon && <AddIcon />}
      </Button>
    </Center>
  );
};

//export const Basic: MyButtonStory = (args) => <Example {...args} />;
export const GroupedExample: MyButtonGroupStory = (args) => (
  <Grouped {...args} />
);
