import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Button, Center, AddIcon, MinusIcon } from '@gluestack/ui';
import Wrapper from '../Wrapper';

const MyUitilityPropsExample: ComponentMeta<typeof Button> = {
  title: 'Utility Props',
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
    direction: {
      control: 'radio',
      options: ['row', 'column'],
    },
  },
  args: {
    text: 'Press me',
    variant: 'solid',
    size: 'md',
    isLoading: false,
    leftIcon: false,
    rightIcon: false,
    direction: 'row',
  },
};

export default MyUitilityPropsExample;

type UtilityProps = ComponentStory<typeof Button>;

export const Basic: UtilityProps = ({
  leftIcon,
  isLoading,
  rightIcon,
  text,
  ...props
}) => {
  return (
    <Wrapper>
      <Button
        {...props}
        bg="$blue500"
        _text-color="$text100"
        _text-hover-color="$text50"
        hover-bg="$blue600"
        active-bg="$blue800"
        focus-bg="$blue700"
        base-bg="$green500"
        sm-bg="$red500"
        sm-hover-bg="$red600"
        sm-active-bg="$red800"
        sm-focus-bg="$red700"
        md-bg="$amber500"
        md-hover-bg="$amber600"
        md-active-bg="$amber800"
        md-focus-bg="$amber700"
      >
        {isLoading && <Button.Spinner color="$amber300" mr="$2" />}
        {leftIcon && <MinusIcon color="$amber300" mr="$2" />}
        <Button.Text>{text}</Button.Text>
        {rightIcon && <AddIcon color="$amber300" ml="$2" />}
      </Button>
    </Wrapper>
  );
};
