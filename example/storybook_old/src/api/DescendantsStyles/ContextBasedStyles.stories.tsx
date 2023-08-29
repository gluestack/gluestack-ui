import type { ComponentMeta } from '@storybook/react-native';
import { ContextBasedStyles } from './ContextBasedStyles';
const MyDescendantsMeta: ComponentMeta<typeof ContextBasedStyles> = {
  title: 'api/stories/ContextBasedStyles',
  component: ContextBasedStyles,
};

export { ContextBasedStyles } from './ContextBasedStyles';
export default MyDescendantsMeta;
