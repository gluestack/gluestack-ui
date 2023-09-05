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
      description: 'The size of the slider.',
      table: {
        defaultValue: { summary: 'md' },
      },
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
    },
    isDisabled: {
      control: 'boolean',
    },
  },
  args: { value: 30, size: 'md' },
};

export default SliderMeta;

export { Slider };
