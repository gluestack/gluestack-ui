import type { ComponentMeta } from '@storybook/react-native';
import { InlineStyles } from './InlineStyles';
const MyInlineStylesMeta: ComponentMeta<typeof InlineStyles> = {
  title: 'api/stories/InlineStyles',
  component: InlineStyles,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {},
};

export { InlineStyles } from './InlineStyles';
export default MyInlineStylesMeta;
