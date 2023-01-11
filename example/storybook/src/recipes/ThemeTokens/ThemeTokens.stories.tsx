import type { ComponentMeta } from '@storybook/react-native';
import { ThemeTokens } from './ThemeTokens';
const MyThemeTokensMeta: ComponentMeta<typeof ThemeTokens> = {
  title: 'recipes/ThemeTokens',
  component: ThemeTokens,
};

export { ThemeTokens } from './ThemeTokens';
export default MyThemeTokensMeta;
