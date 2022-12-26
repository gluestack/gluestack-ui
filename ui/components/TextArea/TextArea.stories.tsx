import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { TextArea, Center } from '@gluestack/ui';
import Wrapper from './../Wrapper';

const TextAreaMeta: ComponentMeta<typeof TextArea> = {
  title: 'TextArea',
  component: TextArea,
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
  parameters: {
    docs: {
      description: {
        component:
          'The **Textarea** component helps create multi-line text inputs.',
      },
    },
  },
};

export default TextAreaMeta;

type TextStory = ComponentStory<typeof TextArea>;

export const Basic: TextStory = ({ ...props }) => {
  return (
    <Wrapper>
      <TextArea.Root {...props}>
        <TextArea
          placeholder="your text goes here..."
          // placeholderTextColor="$red400"
        />
      </TextArea.Root>
    </Wrapper>
  );
};
