import type { ComponentMeta } from '@storybook/react-native';
import Text from './Text';
// import TextSizes from './TextSizes';

const TextMeta: ComponentMeta<typeof Text> = {
  title: 'stories/Text',
  component: Text,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `Text component, which supports paragraphs and other formatting options.`,
  },
  argTypes: {
    size: {
      control: 'select',
      options: [
        '2xs',
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
    bold: {
      control: 'boolean',
    },
    italic: {
      control: 'boolean',
    },
    underline: {
      control: 'boolean',
    },
    strikeThrough: {
      control: 'boolean',
    },
    highlight: {
      control: 'boolean',
    },
    sub: {
      control: 'boolean',
    },
  },
  args: {
    text: 'Hello world',
    size: 'md',
    bold: false,
    italic: false,
    underline: false,
    strikeThrough: false,
    highlight: false,
    sub: false,
  },
};

export default TextMeta;

export { Text };
