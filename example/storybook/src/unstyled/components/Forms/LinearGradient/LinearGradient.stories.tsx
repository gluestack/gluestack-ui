import type { ComponentMeta } from '@storybook/react-native';

import LinearGradientStory from './LinearGradient';
import LinearGradientPressable from './LinearGradientPressable';
import LinearGradientProgress from './LinearGradientCard';

const LinearGradientMeta: ComponentMeta<typeof LinearGradientStory> = {
  title: 'unstyled/stories/FORMS/LinearGradient',
  component: LinearGradientStory,
};

export { LinearGradientStory, LinearGradientPressable, LinearGradientProgress };
export default LinearGradientMeta;
