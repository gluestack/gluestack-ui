import { createSelect } from '@gluestack-ui/select';
import { createActionsheet } from '@gluestack-ui/actionsheet';
import { styled } from '../styled';

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
  AnimatePresence: styled.Component,
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
