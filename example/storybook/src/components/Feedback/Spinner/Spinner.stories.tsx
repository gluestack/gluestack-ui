import type { ComponentMeta } from '@storybook/react-native';
import { SpinnerStory as Spinner } from './Spinner';

const SpinnerMeta: ComponentMeta<typeof Spinner> = {
  title: 'stories/FEEDBACK/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the button.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
  args: {
    // size: 'md'
  },
};

export default SpinnerMeta;

export { Spinner };
