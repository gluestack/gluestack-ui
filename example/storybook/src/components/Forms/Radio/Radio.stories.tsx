import type { ComponentMeta } from '@storybook/react-native';
import RadioStory from './Radio';

const RadioMeta: ComponentMeta<typeof RadioStory> = {
  title: 'stories/FORMS/Radio',
  component: RadioStory,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    isInvalid: {
      type: 'boolean',
    },
    isDisabled: {
      type: 'boolean',
    },
    isReadOnly: {
      type: 'boolean',
    },
  },
  args: {
    size: 'md',
    isInvalid: false,
    isDisabled: false,
    isReadOnly: false,
  },
};

export default RadioMeta;

export { RadioStory };
