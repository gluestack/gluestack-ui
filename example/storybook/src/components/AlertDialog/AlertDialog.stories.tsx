import type { ComponentMeta } from '@storybook/react-native';
import { AlertDialogStory as AlertDialog } from './AlertDialog';

// var st = document.createElement('style');
// st.innerHTML = `#story--alertdialog--basic{ height: 350px }`;
// document.body.append(st);

const AlertDialogMeta: ComponentMeta<typeof AlertDialog> = {
  title: 'stories/OVERLAY/AlertDialog',
  component: AlertDialog,
  argTypes: {
    showAlertDialog: {
      control: 'boolean',
    },
  },
  args: {
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
