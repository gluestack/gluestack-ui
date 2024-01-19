import type { ComponentMeta } from '@storybook/react-native';
import Tooltip from './Tooltip';

const TooltipMeta: ComponentMeta<typeof Tooltip> = {
  title: 'components/COMPOSITES/Tooltip',
  component: Tooltip,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `Whether you need to provide helpful hints to new users or display extra details for power users, the Tooltip component is a simple and effective way.`,
  },
  argTypes: {
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
        'left top',
        'left bottom',
        'right',
        'right top',
        'right bottom',
      ],
    },
    showTooltip: {
      control: 'boolean',
      figmaIgnore: true,
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
