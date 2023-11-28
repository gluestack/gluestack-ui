import type { ComponentMeta } from '@storybook/react-native';
import LinearGradient from './LinearGradient';
import LinearGradientPressable from './LinearGradientPressable';

const LinearGradientMeta: ComponentMeta<typeof LinearGradient> = {
  title: 'ui/stories/Layout/LinearGradient',
  component: LinearGradient,
};

export { LinearGradient, LinearGradientPressable };
export default LinearGradientMeta;
