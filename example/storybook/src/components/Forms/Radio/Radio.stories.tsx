import type { ComponentMeta } from '@storybook/react-native';
import Radio from './Radio';

const RadioMeta: ComponentMeta<typeof Radio> = {
  title: 'stories/FORMS/Radio',
  component: Radio,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isInvalid: {
      type: 'boolean',
      options: [true, false],
    },
    isDisabled: {
      type: 'boolean',
      options: [true, false],
    },
    isHovered: {
      type: 'boolean',
      options: [true, false],
    },
    isFocusVisible: {
      type: 'boolean',
      options: [true, false],
    },
    isReadOnly: {
      type: 'boolean',
      figmaIgnore: true,
      options: [true, false],
    },
  },
  args: {
    size: 'md',
    isInvalid: false,
    isDisabled: false,
    isReadOnly: false,
    isHovered: false,
    isFocusVisible: false,
  },
};

export default RadioMeta;

export { Radio };
