import type { ComponentMeta } from '@storybook/react-native';
import { HStackStory as HStack } from './HStack';
import { HStackReversedExample } from './HStackReversed';

const HStackMeta: ComponentMeta<typeof HStack> = {
  title: 'stories/LAYOUT/HStack',
  component: HStack,
  argTypes: {
    space: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    reversed: {
      control: 'boolean',
    },
  },
  args: {
    space: 'md',
    reversed: false,
  },
};

const HStackReversed: any = HStackReversedExample.bind({});

HStackReversed.parameters = {
  controls: {
    exclude: /.*/g,
  },
};
export default HStackMeta;

export { HStack };

export { HStackReversed };
