import type { ComponentMeta } from '@storybook/react-native';
import { Blank } from './Blank';
const MyBlankMeta: ComponentMeta<typeof Blank> = {
  title: 'Recipes/Blank',
  component: Blank,
};

export { Blank } from './Blank';
export default MyBlankMeta;
