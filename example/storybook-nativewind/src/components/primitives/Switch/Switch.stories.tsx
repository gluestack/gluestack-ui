import type { ComponentMeta } from '@storybook/react-native';
import Switch from './Switch';

const SwitchMeta: ComponentMeta<typeof Switch> = {
  title: 'components/PRIMITIVES/Switch',
  component: Switch,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `The Switch component offers a stylish alternative to the Checkbox, allowing users to enable or disable an option with a sleek sliding motion.`,
  },
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
  },
  args: {
    size: 'md',
    isDisabled: false,
    isEnabled: false,
    isInvalid: false,
  },
};

export default SwitchMeta;

export { Switch };
