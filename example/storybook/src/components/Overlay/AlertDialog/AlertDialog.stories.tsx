import type { ComponentMeta } from '@storybook/react-native';
import { AlertDialogStory as AlertDialog } from './AlertDialog';

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
  },
  args: {
    size: 'md',
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
