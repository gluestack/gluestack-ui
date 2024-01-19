import type { ComponentMeta } from '@storybook/react-native';
import Divider from './Divider';

const DividerMeta: ComponentMeta<typeof Divider> = {
  title: 'components/PRIMITIVES/Divider',
  component: Divider,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription:
      'Revamp your content organization with the Divider component! Use it to visually separate different sections of a list or group for a more structured and easy-to-read interface.',
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
  },
  args: {
    orientation: 'vertical',
  },
};

export default DividerMeta;

export { Divider };
