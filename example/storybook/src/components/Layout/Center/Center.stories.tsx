import type { ComponentMeta } from '@storybook/react-native';
import Center from './Center';
import Shapes from './Shapes';

const CenterMeta: ComponentMeta<typeof Center> = {
  title: 'stories/LAYOUT/Center',
  component: Center,
  argTypes: {},
  args: {},
};

export default CenterMeta;

export { Center, Shapes };
