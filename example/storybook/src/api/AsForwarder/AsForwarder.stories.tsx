import type { ComponentMeta } from '@storybook/react-native';
import { AsForwarderExample } from './AsForwarder';
const MySpecificityMeta: ComponentMeta<typeof AsForwarderExample> = {
  title: 'api/stories/AsForwarder',
  component: AsForwarderExample,
};

export { AsForwarderExample as AsForwarder } from './AsForwarder';

export default MySpecificityMeta;
