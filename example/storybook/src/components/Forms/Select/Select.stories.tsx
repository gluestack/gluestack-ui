import { SelectStory as Select } from './Select';
import { SelectStory as SelectSectionList } from './SelectSectionList';
import { SelectStory as SelectScrollView } from './SelectScrollView';
import { SelectStory as SelectFlatList } from './SelectFlatList';
import { SelectStory as SelectVirtualizedList } from './SelectVirtualizedList';

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
};
