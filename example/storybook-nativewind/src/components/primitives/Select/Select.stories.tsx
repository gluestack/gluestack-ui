import Select from './Select';
import SelectSectionList from './SelectSectionList';
import SelectScrollView from './SelectScrollView';
import SelectFlatList from './SelectFlatList';
import SelectVirtualizedList from './SelectVirtualizedList';
import SelectFormControl from './SelectFormControl';

import type { ComponentMeta } from '@storybook/react-native';

const SelectMeta: ComponentMeta<typeof Select> = {
  title: 'components/PRIMITIVES/Select',
  component: Select,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `Select offers a dynamic and user-friendly way to present a list of options in a closed view, with the ability to expand and select items from a dropdown list.`,
  },
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
