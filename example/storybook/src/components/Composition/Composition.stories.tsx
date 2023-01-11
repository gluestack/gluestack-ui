import type { ComponentMeta } from '@storybook/react-native';
import { Composition } from './Composition';
const MyCompositionMeta: ComponentMeta<typeof Composition> = {
  title: 'components/Composition',
  component: Composition,
};

export { Composition } from './Composition';
export default MyCompositionMeta;
