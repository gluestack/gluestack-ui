import { SelectStory as Select } from './Select';
import type { ComponentMeta } from '@storybook/react-native';

const SelectMeta: ComponentMeta<typeof Select> = {
  title: 'stories/FORMS/Select',
  component: Select,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    variant: {
      control: 'select',
      options: ['underlined', 'outline', 'rounded'],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
    isInvalid: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    size: 'md',
    isDisabled: false,
    isInvalid: false,
    variant: 'underlined',
  },
};

export default SelectMeta;

export { Select };
