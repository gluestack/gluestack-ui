import type { ComponentMeta } from '@storybook/react-native';
import { TooltipStory as Tooltip } from './Tooltip';

const TooltipMeta: ComponentMeta<typeof Tooltip> = {
  title: 'stories/OVERLAY/Tooltip',
  component: Tooltip,
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
        'left top',
        'left bottom',
        'right',
        'right top',
        'right bottom',
      ],
    },
    showTooltip: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    text: 'Hello world',
    placement: 'bottom',
    showTooltip: true,
  },
};

export default TooltipMeta;

export { Tooltip };
