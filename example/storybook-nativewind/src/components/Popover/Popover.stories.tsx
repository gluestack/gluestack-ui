import type { ComponentMeta } from '@storybook/react-native';
import Popover from './Popover';

const PopoverMeta: ComponentMeta<typeof Popover> = {
  title: 'stories/Popover',
  component: Popover,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'full'],
    },
    placement: {
      control: 'select',
      figmaIgnore: true,
      options: [
        'bottom',
        'bottom left',
        'bottom right',
        'top',
        'top left',
        'top right',
        'left',
        'left bottom',
        'left right',
        'right',
        'right bottom',
        'right top',
      ],
    },
  },
  args: {
    size: 'md',
    placement: 'bottom',
  },
};

export default PopoverMeta;

export { Popover };
