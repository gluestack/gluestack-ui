import { createSelect } from '@gluestack-ui/select';
import { createActionsheet } from '@gluestack-ui/actionsheet';

import {
  Root,
  Content,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Backdrop,
  Icon,
  FlatList,
  ScrollView,
  SectionHeaderText,
  SectionList,
  VirtualizedList,
} from './styled-components-actionsheet';

import {
  Root as StyledSelectRoot,
  Trigger as StyledSelectTrigger,
  Input as StyledSelectInput,
  Icon as StyledSelectIcon,
} from './styled-components';

const Actionsheet = createActionsheet({
  Root,
  Backdrop,
  Content,
  DragIndicator,
  IndicatorWrapper,
  Item,
  ItemText,
  Icon,
  ScrollView,
  VirtualizedList,
  FlatList,
  SectionList,
  SectionHeaderText,
  // @ts-ignore
  AnimatePresence: Content.AnimatePresence,
});

export const Select = createSelect(
  {
    Root: StyledSelectRoot,
    Trigger: StyledSelectTrigger,
    Input: StyledSelectInput,
    Icon: StyledSelectIcon,
  },
  {
    Portal: Actionsheet,
    Backdrop: Actionsheet.Backdrop,
    Content: Actionsheet.Content,
    DragIndicator: Actionsheet.DragIndicator,
    DragIndicatorWrapper: Actionsheet.DragIndicatorWrapper,
    Item: Actionsheet.Item,
    ItemText: Actionsheet.ItemText,
    ScrollView: Actionsheet.ScrollView,
    VirtualizedList: Actionsheet.VirtualizedList,
    FlatList: Actionsheet.FlatList,
    SectionList: Actionsheet.SectionList,
    SectionHeaderText: Actionsheet.SectionHeaderText,
  }
);
export const SelectTrigger = Select.Trigger;
export const SelectInput = Select.Input;
export const SelectIcon = Select.Icon;
export const SelectPortal = Select.Portal;
export const SelectBackdrop = Select.Backdrop;
export const SelectContent = Select.Content;
export const SelectDragIndicator = Select.DragIndicator;
export const SelectDragIndicatorWrapper = Select.DragIndicatorWrapper;
export const SelectItem = Select.Item;
export const SelectItemText = Select.ItemText;
export const SelectScrollView = Select.ScrollView;
export const SelectVirtualizedList = Select.VirtualizedList;
export const SelectFlatList = Select.FlatList;
export const SelectSectionList = Select.SectionList;
export const SelectSectionHeaderText = Select.SectionHeaderText;
