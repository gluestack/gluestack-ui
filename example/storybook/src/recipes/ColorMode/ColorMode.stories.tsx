import type { ComponentMeta } from '@storybook/react-native';
import { ColorMode } from './ColorMode';
const MyColorModeMeta: ComponentMeta<typeof ColorMode> = {
  title: 'recipes/ColorMode',
  component: ColorMode,
};

export { ColorMode } from './ColorMode';
export default MyColorModeMeta;
