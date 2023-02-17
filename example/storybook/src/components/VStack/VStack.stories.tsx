import type { ComponentMeta } from '@storybook/react-native';
import { VStackStory as VStack } from './VStack';
import { VStackReversedExample } from './VStackReversed';

const VStackMeta: ComponentMeta<typeof VStack> = {
  title: 'stories/LAYOUT/VStack',
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

// export const VStackReversedStory: ComponentMeta<typeof VStack> = {
//   title: 'stories/LAYOUT/VStack',
//   component: VStackReversedExample,
//   argTypes: {
//     space: {
//       control: 'select',
//       options: ['xs', 'sm', 'md', 'lg', 'xl'],
//     },
//     reversed: {
//       control: 'boolean',
//     },
//   },
//   args: {
//     space: 'md',
//     reversed: true,
//   },
// };

const VStackReversed = VStackReversedExample.bind({});

VStackReversed.parameters = {
  controls: {
    exclude: /.*/g,
  },
};

export default VStackMeta;

export { VStack };
export { VStackReversed };
