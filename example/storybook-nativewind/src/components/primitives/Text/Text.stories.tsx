import type { ComponentMeta } from '@storybook/react-native';
import Text from './Text';
import TextSizes from './TextSizes';

const TextMeta: ComponentMeta<typeof Text> = {
  title: 'components/PRIMITIVES/Text',
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
    fontWeight: {
      control: 'select',
      options: [
        'hairline',
        'thin',
        'light',
        'normal',
        'medium',
        'semibold',
        'bold',
        'extrabold',
        'black',
      ],
    },
  },
  args: {
    text: 'Hello world',
    size: 'md',
    fontWeight: 'medium',
  },
};

export default TextMeta;

export { Text };
export { TextSizes };
