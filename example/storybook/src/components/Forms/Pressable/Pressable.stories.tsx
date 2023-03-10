import type { ComponentMeta } from '@storybook/react-native';
import { PressableStory as Pressable } from './Pressable';

const PressableMeta: ComponentMeta<typeof Pressable> = {
  title: 'stories/FORMS/Pressable',
  component: Pressable,
  argTypes: {},
  args: {},
};

export default PressableMeta;

export { Pressable };
