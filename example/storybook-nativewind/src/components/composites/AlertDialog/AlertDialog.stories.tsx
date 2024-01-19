import type { ComponentMeta } from '@storybook/react-native';
import AlertDialog from './AlertDialog';

const AlertDialogMeta: ComponentMeta<typeof AlertDialog> = {
  title: 'components/COMPOSITES/AlertDialog',
  component: AlertDialog,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `AlertDialog effectively interrupts a user's flow and prompts them to take a specific action. It's commonly used for mandatory confirmations or call-to-actions.`,
  },
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
