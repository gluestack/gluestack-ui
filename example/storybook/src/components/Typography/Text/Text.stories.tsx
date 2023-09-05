import type { ComponentMeta } from '@storybook/react-native';
import Text from './Text';
import TextSizes from './TextSizes';

const TextMeta: ComponentMeta<typeof Text> = {
  title: 'stories/TYPOGRAPHY/Text',
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
};

export default TextMeta;

export { Text };
export { TextSizes };
