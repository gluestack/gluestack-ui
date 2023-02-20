import type { ComponentMeta } from '@storybook/react-native';
import { MyBadgeExample as Badge } from './Badge';

const MyButtonMeta: ComponentMeta<typeof Badge> = {
  title: 'stories/DATA DISPLAY/Badge',
  component: Badge,
  argTypes: {
    style: {
      control: 'select',
      options: ['outline', 'solid'],
    },
    action: {
      control: 'select',
      options: ['error', 'warning', 'success', 'info', 'muted'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    text: 'New feature',
    style: 'solid',
    action: 'muted',
    size: 'md',
  },
};

export default MyButtonMeta;

export { Badge };
