import type { ComponentMeta } from '@storybook/react-native';
import Progress from './Progress';

const ProgressMeta: ComponentMeta<typeof Progress> = {
  title: 'stories/FEEDBACK/Progress',
  component: Progress,
  argTypes: {
    value: {
      type: 'number',
      figmaIgnore: true,
      defaultValue: '50',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
  },
  args: {
    value: 40,
    size: 'md',
  },
};

export default ProgressMeta;

export { Progress };
