import type { ComponentMeta } from '@storybook/react-native';
import { HeadingStory as Heading } from './Heading';

const MyHeadingMeta: ComponentMeta<typeof Heading> = {
  title: 'stories/TYPOGRAPHY/Heading',
  component: Heading,
  argTypes: {
    // onPress: { action: 'pressed the button' },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
  },
  args: {
    text: `I'm the heading`,
    size: '2xl',
  },
};

export default MyHeadingMeta;

export { Heading };
