import type { ComponentMeta } from '@storybook/react-native';
import { MediaQuery } from './MediaQuery';
const MyMediaQueryMeta: ComponentMeta<typeof MediaQuery> = {
  title: 'recipes/MediaQuery',
  component: MediaQuery,
};

export { MediaQuery } from './MediaQuery';
export default MyMediaQueryMeta;
