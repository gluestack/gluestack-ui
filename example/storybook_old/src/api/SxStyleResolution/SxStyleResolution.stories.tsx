import type { ComponentMeta } from '@storybook/react-native';
import { SxStyleResolution } from './SxStyleResolution';
const MySpecificityMeta: ComponentMeta<typeof SxStyleResolution> = {
  title: 'api/stories/SxStyleResolution',
  component: SxStyleResolution,
};

export { SxStyleResolution } from './SxStyleResolution';

export default MySpecificityMeta;
