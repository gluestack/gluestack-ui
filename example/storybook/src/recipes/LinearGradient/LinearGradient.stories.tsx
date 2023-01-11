import type { ComponentMeta } from '@storybook/react-native';
import { LinearGradientExample } from './LinearGradient';
const MyLinearGradientMeta: ComponentMeta<typeof LinearGradientExample> = {
  title: 'recipes/LinearGradient',
  component: LinearGradientExample,
};

export { LinearGradientExample } from './LinearGradient';
export default MyLinearGradientMeta;
