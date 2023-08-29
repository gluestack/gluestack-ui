import type { ComponentMeta } from '@storybook/react-native';
import { PropsPassing } from './PropsPassing';
const MyPropsPassingMeta: ComponentMeta<typeof PropsPassing> = {
  title: 'api/stories/PropsPassing',
  component: PropsPassing,
};

export { PropsPassing } from './PropsPassing';
export default MyPropsPassingMeta;
