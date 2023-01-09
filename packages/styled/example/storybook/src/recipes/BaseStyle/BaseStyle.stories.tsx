import type { ComponentMeta } from '@storybook/react-native';
import { BaseStyle } from './BaseStyle';

const MyBaseStyleMeta: ComponentMeta<typeof BaseStyle> = {
  title: 'Recipes/BaseStyle',
  component: BaseStyle,
};

export { BaseStyle } from './BaseStyle';
export default MyBaseStyleMeta;
