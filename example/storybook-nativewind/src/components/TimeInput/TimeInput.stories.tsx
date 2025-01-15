import type { ComponentMeta } from '@storybook/react-native';
import TimeInput from './TimeInput';

const TimeInputMeta: ComponentMeta<typeof TimeInput> = {
  title: 'stories/TimeInput',
  component: TimeInput,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `The TimeInput component is designed to take the time from user in the form of day.js object`,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: ['outlined', 'underlined'],
    },
    isInvalid: {
      control: 'boolean',
      options: [true, false],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
    isReadOnly: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    size: 'sm',
    variant: 'outlined',
    isInvalid: false,
    isDisabled: false,
    isReadOnly: false,
  },
};

export default TimeInputMeta;

export { TimeInput };
