import { createActionsheet } from '@gluestack-ui/actionsheet';
import {
  Root,
  Content,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Backdrop,
  ScrollView,
  VirtualizedList,
  FlatList,
  SectionList,
  SectionHeaderText,
  Icon,
} from './styled-components';

export const Actionsheet = createActionsheet({
  Root,
  Content,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Backdrop,
  ScrollView,
  VirtualizedList,
  FlatList,
  SectionList,
  SectionHeaderText,
  Icon,
  //@ts-ignore
  AnimatePresence: Content.AnimatePresence,
});

export const ActionsheetContent = Actionsheet.Content;
export const ActionsheetItem = Actionsheet.Item;
export const ActionsheetItemText = Actionsheet.ItemText;
export const ActionsheetDragIndicator = Actionsheet.DragIndicator;
export const ActionsheetDragIndicatorWrapper = Actionsheet.DragIndicatorWrapper;
export const ActionsheetBackdrop = Actionsheet.Backdrop;
export const ActionsheetScrollView = Actionsheet.ScrollView;
export const ActionsheetVirtualizedList = Actionsheet.VirtualizedList;
export const ActionsheetFlatList = Actionsheet.FlatList;
export const ActionsheetSectionList = Actionsheet.SectionList;
export const ActionsheetSectionHeaderText = Actionsheet.SectionHeaderText;
export const ActionsheetIcon = Actionsheet.Icon;
