import type { ComponentMeta } from '@storybook/react-native';
import maxWidth from './maxWidth';

const MediaQueryMeta: ComponentMeta<typeof maxWidth> = {
  title: 'hooks/stories/useMediaQuery',
  component: maxWidth,
};

export { maxWidth } from './maxWidth';

export default MediaQueryMeta;
