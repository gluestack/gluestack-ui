import type { ComponentMeta } from '@storybook/react-native';
import Pressable from './Pressable';

const PressableMeta: ComponentMeta<typeof Pressable> = {
  title: 'stories/Pressable',
  component: Pressable,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `By providing access to hover, pressed, and focus events, Pressable serves as a more flexible alternative to buttons at a lower level of abstraction. It is a useful primitive for advanced customization needs.`,
  },
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
