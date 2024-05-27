import type { ComponentMeta } from '@storybook/react-native';
import Pressable from './Pressable';

const PressableMeta: ComponentMeta<typeof Pressable> = {
  title: 'stories/Pressable',
  component: Pressable,
  argTypes: {
    disabled: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    disabled: false,
  },
};

export default PressableMeta;

export { Pressable };
