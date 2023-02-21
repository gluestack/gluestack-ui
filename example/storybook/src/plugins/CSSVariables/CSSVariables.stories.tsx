import type { ComponentMeta } from '@storybook/react-native';
import { CSSVariables } from './CSSVariables';
const MyCSSVariablesMeta: ComponentMeta<typeof CSSVariables> = {
  title: 'plugins/stories/CSSVariables',
  component: CSSVariables,
};

export { CSSVariables };
export default MyCSSVariablesMeta;
