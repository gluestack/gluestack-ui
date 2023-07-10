import type { ComponentMeta } from '@storybook/react-native';
import Alert from './Alert';
import AlertVariants from './Variants';

const AlertMeta: ComponentMeta<typeof Alert> = {
  title: 'stories/FEEDBACK/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'accent', 'outline'],
    },
    action: {
      control: 'select',
      options: ['info', 'error', 'warning', 'muted', 'success'],
    },
  },
  args: {
    action: 'success',
    variant: 'solid',
  },
};

export default AlertMeta;

export { Alert, AlertVariants };
