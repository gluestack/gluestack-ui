import type { ComponentMeta } from '@storybook/react-native';
import { FontsPlugin } from './FontsPlugin';
const MyFontsPluginMeta: ComponentMeta<typeof FontsPlugin> = {
  title: 'plugins/stories/FontsPlugin',
  component: FontsPlugin,
};

export { FontsPlugin } from './FontsPlugin';
export { CustomFontMapper } from './CustomFontMapper';
export default MyFontsPluginMeta;
