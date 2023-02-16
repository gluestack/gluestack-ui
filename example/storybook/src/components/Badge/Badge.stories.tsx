import type { ComponentMeta } from '@storybook/react-native';
import { MyBadgeExample as Badge } from './Badge';

const MyButtonMeta: ComponentMeta<typeof Badge> = {
  title: 'stories/DATA DISPLAY/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'subtle',
        'outline',
        'solid',
        'success-subtle',
        'success-outline',
        'success-solid',
        'danger-subtle',
        'danger-outline',
        'danger-solid',
        'info-subtle',
        'info-outline',
        'info-solid',
        'warning-subtle',
        'warning-outline',
        'warning-solid',
      ],
    },
  },
  args: {
    text: 'New feature',
    variant: 'subtle',
  },
};

export default MyButtonMeta;

export { Badge };
