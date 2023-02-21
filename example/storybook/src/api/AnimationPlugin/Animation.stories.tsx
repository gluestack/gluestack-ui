import type { ComponentMeta } from '@storybook/react-native';
import { AnimationPlugin } from './AnimationPlugin';
const MyAnimationPluginMeta: ComponentMeta<typeof AnimationPlugin> = {
  title: 'api/stories/AnimationPlugin',
  component: AnimationPlugin,
};

export { AnimationPlugin } from './AnimationPlugin';
export default MyAnimationPluginMeta;
