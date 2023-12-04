import type { ComponentMeta } from '@storybook/react-native';
import { ExtendComponentsExample } from './ExtendComponents';
const MySpecificityMeta: ComponentMeta<typeof ExtendComponentsExample> = {
  title: 'api/stories/ExtendComponents',
  component: ExtendComponentsExample,
};

export { ExtendComponentsExample as ExtendComponents } from './ExtendComponents';

export default MySpecificityMeta;
