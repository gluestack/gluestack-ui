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
        '7xl',
        '8xl',
        '9xl',
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
        // 'extraBlack',
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
