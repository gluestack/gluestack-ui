import type { ComponentMeta } from '@storybook/react-native';
import { Descendants } from './Descendants';
const MyDescendantsMeta: ComponentMeta<typeof Descendants> = {
  title: 'recipes/Descendants',
  component: Descendants,
};

export { Descendants } from './Descendants';
export default MyDescendantsMeta;
