import type { ComponentMeta } from '@storybook/react-native';
import { SliderStory as Slider } from './Slider';

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
      description: 'The size of the button.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
  args: { value: 30, size: 'md' },
};

export default SliderMeta;

export { Slider };
