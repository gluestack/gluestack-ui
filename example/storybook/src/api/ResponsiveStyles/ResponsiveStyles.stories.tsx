import type { ComponentMeta } from '@storybook/react-native';
import { ResponsiveStyles } from './ResponsiveStyles';
const MyResponsiveStylesMeta: ComponentMeta<typeof ResponsiveStyles> = {
  title: 'api/stories/ResponsiveStyles',
  component: ResponsiveStyles,
};

export { ResponsiveStyles } from './ResponsiveStyles';
export default MyResponsiveStylesMeta;
