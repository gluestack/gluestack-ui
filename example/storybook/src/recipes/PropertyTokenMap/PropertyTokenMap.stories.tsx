import type { ComponentMeta } from '@storybook/react-native';
import { PropertyTokenMap } from './PropertyTokenMap';
const MyPropertyTokenMapMeta: ComponentMeta<typeof PropertyTokenMap> = {
  title: 'recipes/PropertyTokenMap',
  component: PropertyTokenMap,
};

export { PropertyTokenMap } from './PropertyTokenMap';
export default MyPropertyTokenMapMeta;
