import type { ComponentMeta } from '@storybook/react-native';
import { MultipleProvider } from './MultipleProvider';
const MyMultipleProviderMeta: ComponentMeta<typeof MultipleProvider> = {
  title: 'api/stories/MultipleProvider',
  component: MultipleProvider,
};

export { MultipleProvider } from './MultipleProvider';
//
export default MyMultipleProviderMeta;
