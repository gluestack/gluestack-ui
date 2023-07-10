import type { ComponentMeta } from '@storybook/react-native';
import { PopoverStory as Popover } from './Popover';

const PopoverMeta: ComponentMeta<typeof Popover> = {
  title: 'stories/OVERLAY/Popover',
  component: Popover,
  argTypes: {
    placement: {
      control: 'select',
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
    placement: 'bottom',
  },
};

export default PopoverMeta;

export { Popover };
