import type { ComponentMeta } from '@storybook/react-native';
import { PlatformBasedStyles } from './PlatformBasedStyles';
const MyPlatformPropsMeta: ComponentMeta<typeof PlatformBasedStyles> = {
  title: 'api/stories/PlatformBasedStyles',
  component: PlatformBasedStyles,
};

export { PlatformBasedStyles } from './PlatformBasedStyles';
export default MyPlatformPropsMeta;
