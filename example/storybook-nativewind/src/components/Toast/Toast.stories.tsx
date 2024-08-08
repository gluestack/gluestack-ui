import type { ComponentMeta } from '@storybook/react-native';
import Toast from './Toast';
// import DuplicateToastPrevent from './DuplicateToastPrevent';

const ToastMeta: ComponentMeta<typeof Toast> = {
  title: 'stories/Toast',
  component: Toast,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `Toast is a component that can display alerts, notifications, or messages on top of an overlay layer. It is commonly used to inform users of important information or actions.`,
  },
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
      options: ['error', 'warning', 'success', 'info', 'muted'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline'],
    },
  },
  args: {
    placement: 'bottom',
    action: 'muted',
    variant: 'solid',
  },
};

export default ToastMeta;

// export { Toast, DuplicateToastPrevent };
export { Toast };
