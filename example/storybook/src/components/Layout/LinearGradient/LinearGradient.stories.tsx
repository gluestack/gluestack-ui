import type { ComponentMeta } from '@storybook/react-native';

import LinearGradientStory from './LinearGradient';
import LinearGradientPressable from './LinearGradientPressable';
import LinearGradientCard from './LinearGradientCard';

const LinearGradientMeta: ComponentMeta<typeof LinearGradientStory> = {
  title: 'stories/LAYOUT/LinearGradient',
  component: LinearGradientStory,
};

export { LinearGradientStory, LinearGradientPressable, LinearGradientCard };
export default LinearGradientMeta;
