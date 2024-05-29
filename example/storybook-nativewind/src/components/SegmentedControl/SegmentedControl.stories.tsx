import SegmentedControl from './SegmentedControl';
import SegmentedDivider from './SegmentedDivider';

const SegmentedControlMeta = {
  title: 'stories/SegmentedControl',
  component: SegmentedControl,

  args: {
    size: 'md',
    orientation: 'horizontal',
    space: 'none',
    isDivider: 'false',
  },

  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    space: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'none'],
    },
    isDivider: {
      control: 'boolean',
    },
  },
};

export default SegmentedControlMeta;

export { SegmentedControl, SegmentedDivider };
