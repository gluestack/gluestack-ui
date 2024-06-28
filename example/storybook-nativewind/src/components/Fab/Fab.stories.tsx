import type { ComponentMeta } from '@storybook/react-native';
import Fab from './Fab';

const FabMeta: ComponentMeta<typeof Fab> = {
  title: 'stories/Fab',
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
  },
  args: {
    placement: 'bottom right',
    size: 'md',
  },
};

export default FabMeta;

export { Fab };
