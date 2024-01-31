import type { ComponentMeta } from '@storybook/react-native';
import { MultipleTheme } from './MultipleTheme';
const MyDescendantsMeta: ComponentMeta<typeof MultipleTheme> = {
  title: 'styled/api/stories/MultipleTheme',
  component: MultipleTheme,
};

export { MultipleTheme } from './MultipleTheme';
export default MyDescendantsMeta;
