import type { ComponentMeta } from '@storybook/react-native';

import LinearGradient from './LinearGradient';
import LinearGradientPressable from './LinearGradientPressable';
import LinearGradientCard from './LinearGradientCard';

const LinearGradientMeta: ComponentMeta<typeof LinearGradient> = {
  title: 'stories/LAYOUT/LinearGradient',
  component: LinearGradient,
};

export { LinearGradient, LinearGradientPressable, LinearGradientCard };
export default LinearGradientMeta;
