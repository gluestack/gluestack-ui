import type { ComponentMeta } from '@storybook/react-native';
import Badge from './Badge';

const BadgeMeta: ComponentMeta<typeof Badge> = {
  title: 'unstyled/stories/DATA DISPLAY/Badge',
  component: Badge,
  argTypes: {
    variant: {
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
    text: 'New Feature',
    variant: 'solid',
    action: 'muted',
    size: 'md',
  },
};

export default BadgeMeta;

export { Badge };
