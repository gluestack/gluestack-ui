import type { ComponentMeta } from '@storybook/react-native';
import { TooltipStory as Tooltip } from './Tooltip';

const MyTooltipMeta: ComponentMeta<typeof Tooltip> = {
  title: 'stories/OVERLAY/Tooltip',
  component: Tooltip,
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'bottom',
        'bottom-end',
        'bottom-start',
        'top',
        'top-end',
        'top-start',
        'left',
        'left-end',
        'left-start',
        'right',
        'right-end',
        'right-start',
      ],
    },
  },
  args: {
    text: 'Hello world',
    placement: 'bottom',
  },
  parameters: {
    docs: {
      source: {
        type: 'auto',
      },
      description: {
        component:
          'A **tooltip** provides a brief, informative message when a user interacts with an element. Methods of **tooltip** initiation include: through a mouse-hover gesture or a keyboard-hover gesture.',
      },
    },
  },
};

export default MyTooltipMeta;

export { Tooltip };
