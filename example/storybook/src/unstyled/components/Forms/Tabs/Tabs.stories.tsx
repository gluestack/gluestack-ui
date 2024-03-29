import type { ComponentMeta } from '@storybook/react-native';
import Tabs from './Tabs';

const TabsMeta: ComponentMeta<typeof Tabs> = {
  title: 'unstyled/stories/DISCLOSURE/Tabs',
  component: Tabs,
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

export default TabsMeta;

export { Tabs };
