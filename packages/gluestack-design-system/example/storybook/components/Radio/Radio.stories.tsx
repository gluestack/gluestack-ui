import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { RadioGroup } from './RadioGroup';
import Wrapper from '../Wrapper';

const MyRadioMeta: ComponentMeta<typeof RadioGroup> = {
  title: 'FORMS/Radio',
  component: RadioGroup,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    isInvalid: {
      type: 'boolean',
    },
    isDisabled: {
      type: 'boolean',
    },
    isReadOnly: {
      type: 'boolean',
    },
  },
  args: {
    size: 'md',
    isInvalid: false,
    isDisabled: false,
    isReadOnly: false,
  },
};

export default MyRadioMeta;

// type MyRadioStory = ComponentStory<typeof MyRadio>;
type RadioGroupStory = ComponentStory<typeof RadioGroup>;

export const RadioGroupExample: RadioGroupStory = (args) => (
  <Wrapper>
    <RadioGroup {...args} />
  </Wrapper>
);
