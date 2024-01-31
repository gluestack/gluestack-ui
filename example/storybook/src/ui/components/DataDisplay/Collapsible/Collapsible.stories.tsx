import type { ComponentMeta } from '@storybook/react-native';
import Collapsible from './Collapsible';

const CollapsibleMeta: ComponentMeta<typeof Collapsible> = {
  title: 'stories/DATA DISPLAY/Collapsible',
  component: Collapsible,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: '',
  },
  argTypes: {},
  args: {},
};

export default CollapsibleMeta;

export { Collapsible };
