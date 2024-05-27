import type { ComponentMeta } from '@storybook/react-native';
import Toast from './Toast';

const ToastMeta: ComponentMeta<typeof Toast> = {
  title: 'stories/Toast',
  component: Toast,
  argTypes: {
    placement: {
      control: 'select',
      figmaIgnore: true,
      options: [
        'top',
        'top right',
        'top left',
        'bottom',
        'bottom left',
        'bottom right',
      ],
    },
    action: {
      control: 'select',
      options: ['error', 'warning', 'success', 'info', 'attention'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'accent'],
    },
  },
  args: {
    placement: 'bottom',
    action: 'attention',
    variant: 'solid',
  },
};

export default ToastMeta;

export { Toast };
