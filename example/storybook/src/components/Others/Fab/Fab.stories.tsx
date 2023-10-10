import type { ComponentMeta } from '@storybook/react-native';
import Fab from './Fab';

const FabMeta: ComponentMeta<typeof Fab> = {
  title: 'stories/OTHERS/Fab',
  component: Fab,
  argTypes: {
    placement: {
      control: 'select',
      figmaIgnore: true,
      options: [
        'top right',
        'top left',
        'bottom right',
        'bottom left',
        'top center',
        'bottom center',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    showLabel: {
      control: 'boolean',
      options: [true, false],
    },
    showIcon: {
      control: 'boolean',
      figmaIgnore: true,
      options: [true, false],
    },
  },
  args: {
    placement: 'bottom right',
    showLabel: true,
    showIcon: true,
    size: 'md',
  },
};

export default FabMeta;

export { Fab };
