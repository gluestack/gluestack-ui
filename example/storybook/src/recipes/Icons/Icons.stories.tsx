import type { ComponentMeta } from '@storybook/react-native';
import { Icons } from './Icons';
const MyIconsMeta: ComponentMeta<typeof Icons> = {
  title: 'recipes/Icons',
  component: Icons,
};

export { Icons } from './Icons';
export default MyIconsMeta;
