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
  },
  args: {
    value: 40,
  },
};

export default ProgressMeta;

export { Progress };
