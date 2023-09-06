import type { ComponentMeta } from '@storybook/react-native';
import Slider from './Slider';

const SliderMeta: ComponentMeta<typeof Slider> = {
  title: 'stories/FORMS/Slider',
  component: Slider,
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
  //@ts-ignore
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
