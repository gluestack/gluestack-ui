import type { ComponentMeta } from '@storybook/react-native';
import { Specificity } from './Specificity';
const MySpecificityMeta: ComponentMeta<typeof Specificity> = {
  title: 'api/stories/Specificity',
  component: Specificity,
};

export { Specificity } from './Specificity';

export default MySpecificityMeta;
