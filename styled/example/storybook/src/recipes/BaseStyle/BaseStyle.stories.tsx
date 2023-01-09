import type { ComponentMeta } from '@storybook/react-native';
import { BaseStyle } from './BaseStyle';
import { Page } from '../../../storybookDocsComponents/Page';
const MyBaseStyleMeta: ComponentMeta<typeof BaseStyle> = {
  title: 'Recipes/BaseStyle',
  component: BaseStyle,
  parameters: {
    docs: {
      page: () => {
        return <Page />;
      },
    },
  },
};

export { BaseStyle } from './BaseStyle';
export default MyBaseStyleMeta;
