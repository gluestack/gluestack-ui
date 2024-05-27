import type { ComponentMeta } from '@storybook/react-native';
import VStack from './VStack';

const VStackMeta: ComponentMeta<typeof VStack> = {
  title: 'stories/VStack',
  component: VStack,
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

export default VStackMeta;

export { VStack };
