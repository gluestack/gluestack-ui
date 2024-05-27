import type { ComponentMeta } from '@storybook/react-native';
import Switch from './Switch';

const SwitchMeta: ComponentMeta<typeof Switch> = {
  title: 'stories/Switch',
  component: Switch,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
    isEnabled: {
      control: 'boolean',
      options: [true, false],
    },
    isInvalid: {
      control: 'boolean',
      options: [true, false],
    },
    defaultValue: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    size: 'md',
    isDisabled: false,
    isEnabled: false,
    isInvalid: false,
    defaultValue: false,
  },
};

export default SwitchMeta;

export { Switch };
