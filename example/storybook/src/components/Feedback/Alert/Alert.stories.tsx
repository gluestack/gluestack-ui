import type { ComponentMeta } from '@storybook/react-native';
import { AlertStory as Alert } from './Alert';

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

export { Alert };
export { AlertVariants } from './Variants';
