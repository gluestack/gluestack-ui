import type { ComponentMeta } from '@storybook/react-native';
import Tabs from './Tabs';

const TabsMeta: ComponentMeta<typeof Tabs> = {
  title: 'stories/DISCLOSURE/Tabs',
  component: Tabs,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `Tabs Desc`,
  },
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
