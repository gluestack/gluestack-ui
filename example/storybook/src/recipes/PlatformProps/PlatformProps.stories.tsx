import type { ComponentMeta } from '@storybook/react-native';
import { PlatformProps } from './PlatformProps';
const MyPlatformPropsMeta: ComponentMeta<typeof PlatformProps> = {
  title: 'recipes/PlatformProps',
  component: PlatformProps,
};

export { PlatformProps } from './PlatformProps';
export default MyPlatformPropsMeta;
