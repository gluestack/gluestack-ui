import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Text } from '@gluestack/ui';
import Wrapper from '../Wrapper';

const TextMeta: ComponentMeta<typeof Text> = {
  title: 'TYPOGRAPHY/Text',
  component: Text,
  argTypes: {
    size: {
      control: 'select',
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
      ],
    },
  },
  args: {
    text: 'Hello world',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        component:
          '**Text** allows the rendering of text and paragraphs within an interface.',
      },
    },
  },
};

export default TextMeta;

type TextStory = ComponentStory<typeof Text>;
type SizeTextStory = ComponentStory<typeof Text>;

export const Basic: TextStory = ({ size, text, ...props }) => {
  return (
    <Wrapper>
      <Text sx={{ style: { fontSize: `$${size}` } }} {...props}>
        {text}
      </Text>
    </Wrapper>
  );
};

export const Sizes: SizeTextStory = ({ _size, ..._props }: any) => {
  const sizes = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
  ];
  return (
    <Wrapper>
      {sizes.map((size: any) => (
        <Text sx={{ style: { fontSize: `$${size}`, lineHeight: '$md' } }}>
          {size}
        </Text>
      ))}
    </Wrapper>
  );
};
