import type { ComponentMeta } from '@storybook/react-native';
import AlertDialog from './AlertDialog';

const AlertDialogMeta: ComponentMeta<typeof AlertDialog> = {
  title: 'stories/OVERLAY/AlertDialog',
  component: AlertDialog,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'full'],
      description: 'The size of the button.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    showAlertDialog: {
      control: 'boolean',
    },
  },
  args: {
    size: 'md',
    showAlertDialog: true,
  },
};

export default AlertDialogMeta;

export { AlertDialog };
