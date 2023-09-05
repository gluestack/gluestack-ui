import type { ComponentMeta } from '@storybook/react-native';
import Radio from './Radio';

const RadioMeta: ComponentMeta<typeof Radio> = {
  title: 'stories/FORMS/Radio',
  component: Radio,
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

export { Radio };
