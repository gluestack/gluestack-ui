import type { ComponentMeta } from '@storybook/react-native';
import { MediaHookStory } from './useMedia';

const MediaQueryMeta: ComponentMeta<typeof MediaHookStory> = {
  title: 'ui/hooks/stories/useMedia',
  component: MediaHookStory,
};

export { MediaHookStory } from './useMedia';

export default MediaQueryMeta;
