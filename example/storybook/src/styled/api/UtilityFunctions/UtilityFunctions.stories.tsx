import type { ComponentMeta } from '@storybook/react-native';
import { UtilityFunctions } from './UtilityFunctions';
const MyUtilityFunctionsMeta: ComponentMeta<typeof UtilityFunctions> = {
  title: 'styled/api/stories/UtilityFunctions',
  component: UtilityFunctions,
};

export { UtilityFunctions } from './UtilityFunctions';
export default MyUtilityFunctionsMeta;
