import type { ComponentMeta } from '@storybook/react-native';
import { AlertTemp as Alert } from './Alert';

const MyAlertMeta: ComponentMeta<typeof Alert> = {
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

export default MyAlertMeta;

export { Alert };
export { AlertVariants } from './Variants';
