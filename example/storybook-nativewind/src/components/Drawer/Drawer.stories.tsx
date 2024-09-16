import type { ComponentMeta } from '@storybook/react-native';
import Drawer from './Drawer';

const DrawerMeta: ComponentMeta<typeof Drawer> = {
  title: 'stories/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
  },
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `A Drawer component provides a slide-in panel from any screen edge, with customizable size and anchor positions, featuring smooth animations for opening and closing. It adapts dynamically based on screen dimensions.`,
  },
  args: {
    size: 'sm',
    anchor: 'left',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
    },
    anchor: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
  },
};

export default DrawerMeta;

export { Drawer };
