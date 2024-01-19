import type { ComponentMeta } from '@storybook/react-native';
import Badge from './Badge';

const BadgeMeta: ComponentMeta<typeof Badge> = {
  title: 'components/PRIMITIVES/Badge',
  component: Badge,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription:
      'The badge component lets you quickly and easily add status indicators to your interface for improved usability. They are designed to be attention-grabbing and quickly convey important information.',
  },
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
