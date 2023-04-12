import type { ComponentMeta } from '@storybook/react-native';
import { TabsStory as Tabs } from './Tabs';

const TabsMeta: ComponentMeta<typeof Tabs> = {
  title: 'stories/DISCLOSURE/Tabs',
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
