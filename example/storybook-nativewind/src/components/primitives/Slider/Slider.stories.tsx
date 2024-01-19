import type { ComponentMeta } from '@storybook/react-native';
import Slider from './Slider';

const SliderMeta: ComponentMeta<typeof Slider> = {
  title: 'components/PRIMITIVES/Slider',
  component: Slider,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    clusteringOrder: ['size', 'orientation'],
    componentDescription: `The Slider component enables an intuitive selection of values within a designated range. Users can easily adjust their selection by sliding a visual indicator along the track.`,
  },
  argTypes: {
    value: {
      control: { type: 'number', min: 1, max: 100 },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'The orientation of the slider.',
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
    isReversed: {
      control: 'boolean',
      figmaIgnore: true,
      options: [true, false],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
    isHovered: {
      control: 'boolean',
      options: [true, false],
    },
    isPressed: {
      control: 'boolean',
      options: [true, false],
    },
    isFocused: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    value: 30,
    size: 'md',
    orientation: 'horizontal',
    isReversed: false,
    isHovered: false,
    isPressed: false,
    isFocused: false,
    isDisabled: false,
  },
};

export default SliderMeta;

export { Slider };
