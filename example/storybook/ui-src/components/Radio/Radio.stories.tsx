import type { ComponentMeta } from '@storybook/react-native';
import { RadioGroupStory as RadioGroup } from './Radio';

const MyRadioMeta: ComponentMeta<typeof RadioGroup> = {
  title: 'stories/FORMS/Radio',
  component: RadioGroup,
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

export default MyRadioMeta;

export { RadioGroup };
