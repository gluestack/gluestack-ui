import type { ComponentMeta } from '@storybook/react-native';
import { Test } from './Test';
const MyTestMeta: ComponentMeta<typeof Test> = {
  title: 'components/Test',
  component: Test,
};

export { Test } from './Test';
export default MyTestMeta;
