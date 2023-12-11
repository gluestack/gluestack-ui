import type { ComponentMeta } from '@storybook/react-native';
import { AnimationPlugin } from './AnimationPlugin';
const MyAnimationPluginMeta: ComponentMeta<typeof AnimationPlugin> = {
  title: 'styled/plugins/stories/Animation Plugin',
  component: AnimationPlugin,
};

export { AnimationPlugin } from './AnimationPlugin';
export default MyAnimationPluginMeta;
