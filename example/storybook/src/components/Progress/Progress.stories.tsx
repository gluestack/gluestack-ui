import type { ComponentMeta } from '@storybook/react-native';
import { ProgressBasicStory as Progress } from './Progress';

const ProgressMeta: ComponentMeta<typeof Progress> = {
  title: 'stories/FEEDBACK/Progress',
  component: Progress,
  argTypes: {
    value: {
      type: 'number',
      defaultValue: '50',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
  },
  args: {
    value: 40,
    size: 'md',
  },
};

export default ProgressMeta;

export { Progress };
