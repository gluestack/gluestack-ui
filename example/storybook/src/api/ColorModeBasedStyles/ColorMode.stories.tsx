import type { ComponentMeta } from '@storybook/react-native';
import { ColorMode } from './ColorMode';
const MyColorModeMeta: ComponentMeta<typeof ColorMode> = {
  title: 'api/stories/ColorMode',
  component: ColorMode,
};

export { ColorMode } from './ColorMode';
//
export default MyColorModeMeta;
