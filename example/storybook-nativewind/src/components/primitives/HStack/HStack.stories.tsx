import type { ComponentMeta } from '@storybook/react-native';
import HStack from './HStack';
import HStackReversed from './HStackReversed';

const HStackMeta: ComponentMeta<typeof HStack> = {
  title: 'components/PRIMITIVES/HStack',
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

export default HStackMeta;

export { HStack };

export { HStackReversed };
