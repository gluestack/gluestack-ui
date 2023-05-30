import type { ComponentMeta } from '@storybook/react-native';
import MediaQuery from './useMediaQuery';

const MediaQueryMeta: ComponentMeta<typeof MediaQuery> = {
  title: 'hooks/stories/MediaQuery',
  component: MediaQuery,
};

export { MediaQuery } from './useMediaQuery';
export default MediaQueryMeta;
