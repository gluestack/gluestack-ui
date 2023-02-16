import type { ComponentMeta } from '@storybook/react-native';
import { SwitchStory as Switch } from './Switch';

const SwitchMeta: ComponentMeta<typeof Switch> = {
  title: 'stories/FORMS/Switch',
  component: Switch,
  argTypes: {
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
    isEnabled: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    isDisabled: false,
    isEnabled: false,
  },
};

export default SwitchMeta;

export { Switch };
