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
      options: [true, false],
    },
  },
  args: {
    size: 'md',
    showAlertDialog: true,
  },
  parameters: {
    docs: {
      description: {
        component: '**markdown** description goes here',
      },
    },
  },
};

export default AlertDialogMeta;

export { AlertDialog };
