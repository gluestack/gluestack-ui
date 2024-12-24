import type { ComponentMeta } from '@storybook/react-native';
import Alert from './Alert';

const AlertMeta: ComponentMeta<typeof Alert> = {
  title: 'stories/Alert',
  component: Alert,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `Alerts are used to communicate the status of a system, feature, or page. They indicate a specific state that may require attention from the user.`,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline'],
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
