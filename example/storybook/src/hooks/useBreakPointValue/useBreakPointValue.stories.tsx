import type { ComponentMeta } from '@storybook/react-native';
import { breakPointValueStory } from './breakPointValue';

const MediaQueryMeta: ComponentMeta<typeof breakPointValueStory> = {
  title: 'hooks/stories/useMediaQuery',
  component: breakPointValueStory,
};

export { breakPointValueStory } from './breakPointValue';

export default MediaQueryMeta;
