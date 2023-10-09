import type { ComponentMeta } from '@storybook/react-native';
import LinearGradient from './LinearGradient';
import LinearGradientPressable from './LinearGradientPressable';

const LinearGradientMeta: ComponentMeta<typeof LinearGradient> = {
  title: 'stories/Layout/LinearGradient',
  component: LinearGradient,
};

export { LinearGradient, LinearGradientPressable };
export default LinearGradientMeta;
