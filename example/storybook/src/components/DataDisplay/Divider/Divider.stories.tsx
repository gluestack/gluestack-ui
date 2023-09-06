import type { ComponentMeta } from '@storybook/react-native';
import Divider from './Divider';

const DividerMeta: ComponentMeta<typeof Divider> = {
  title: 'stories/DATA DISPLAY/Divider',
  component: Divider,
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
  },
  args: {
    orientation: 'vertical',
  },
};

export default DividerMeta;

export { Divider };
