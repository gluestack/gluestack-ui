import type { ComponentMeta } from '@storybook/react-native';
import { PropertyResolver } from './PropertyResolver';
const MyPropertyResolverMeta: ComponentMeta<typeof PropertyResolver> = {
  title: 'api/stories/PropertyResolver',
  component: PropertyResolver,
};

export { PropertyResolver } from './PropertyResolver';
export default MyPropertyResolverMeta;
