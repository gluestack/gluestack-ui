import Select from './Select';
import SelectSectionList from './SelectSectionList';
import SelectScrollView from './SelectScrollView';
import SelectFlatList from './SelectFlatList';
import SelectVirtualizedList from './SelectVirtualizedList';
import SelectFormControl from './SelectFormControl';

import type { ComponentMeta } from '@storybook/react-native';

const SelectMeta: ComponentMeta<typeof Select> = {
  title: 'unstyled/stories/FORMS/Select',
  component: Select,
  argTypes: {
    size: {
      control: 'select',
      options: ['xl', 'lg', 'md', 'sm'],
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
    isReadOnly: {
      control: 'boolean',
      options: [true, false],
    },
    isRequired: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    size: 'md',
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: true,
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
