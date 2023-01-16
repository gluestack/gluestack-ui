import type { ComponentMeta } from '@storybook/react-native';
import { LinearGradient } from './LinearGradient';
const MyLinearGradientMeta: ComponentMeta<typeof LinearGradient> = {
  title: 'api/stories/LinearGradient',
  component: LinearGradient,
};

export { LinearGradient } from './LinearGradient';
export default MyLinearGradientMeta;
