import type { ComponentMeta } from '@storybook/react-native';
import { BaseStyle } from './BaseStyle';

const Component = BaseStyle;
const MyBaseStyleMeta: ComponentMeta<typeof BaseStyle> = {
  title: 'Recipes/BaseStyle',
  component: Component,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    // docs: {
    //   page: null,
    // },
    // docs: { source: { code: JSON.stringify(template) } },
  },
};
export { BaseStyle } from './BaseStyle';
export default MyBaseStyleMeta;
