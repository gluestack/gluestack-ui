import type { ComponentMeta } from '@storybook/react-native';
import Progress from './Progress';

const ProgressMeta: ComponentMeta<typeof Progress> = {
  title: 'stories/Progress',
  component: Progress,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `The Progress component is designed to display the progress of a task that involves multiple steps and takes some time to complete.`,
  },
  argTypes: {
    value: {
      type: 'number',
      defaultValue: '50',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
  args: {
    value: 40,
    size: 'md',
    orientation: 'horizontal',
  },
};

export default ProgressMeta;

export { Progress };
