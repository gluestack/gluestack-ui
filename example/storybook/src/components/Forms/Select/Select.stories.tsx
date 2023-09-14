import Select from './Select';
import SelectSectionList from './SelectSectionList';
import SelectScrollView from './SelectScrollView';
import SelectFlatList from './SelectFlatList';
import SelectVirtualizedList from './SelectVirtualizedList';
import SelectFormControl from './SelectFormControl';

import type { ComponentMeta } from '@storybook/react-native';

const SelectMeta: ComponentMeta<typeof Select> = {
  title: 'stories/FORMS/Select',
  component: Select,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: ['outline', 'underlined', 'rounded'],
    },
    isInvalid: {
      control: 'boolean',
      options: [true, false],
    },
    isHovered: {
      control: 'boolean',
      options: [true, false],
    },
    isFocused: {
      control: 'boolean',
      options: [true, false],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    size: 'md',
    isDisabled: false,
    isInvalid: false,
    isHovered: false,
    isFocused: false,
    variant: 'outline',
  },
};

export default SelectMeta;

export {
  Select,
  SelectSectionList,
  SelectScrollView,
  SelectFlatList,
  SelectVirtualizedList,
  SelectFormControl,
};
