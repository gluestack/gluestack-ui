import { Actionsheet as ActionsheetMain } from './Actionsheet';
import ActionsheetContent from './ActionsheetContent';
import { ActionsheetItem } from './ActionsheetItem';
import { ActionsheetItemText } from './ActionsheetItemText';
import ActionsheetBackdrop from './ActionsheetBackdrop';
import ActionsheetDragIndicator from './ActionsheetDragIndicator';
import { ActionsheetDragIndicatorWrapper } from './ActionsheetDragIndicatorWrapper';
import { ActionsheetScrollView } from './ActionsheetScrollView';
import { ActionsheetVirtualizedList } from './ActionsheetVirtualizedList';

import type { IActionsheetComponentType } from './types';
import { ActionsheetFlatList } from './ActionsheetFlatList';
import { ActionsheetSectionList } from './ActionsheetSectionList';
import { ActionsheetSectionHeaderText } from './ActionsheetSectionHeaderText';
import { ActionsheetIcon } from './ActionsheetIcon';

export function createActionsheet<
  ActionsheetProps,
  BackdropProps,
  ItemProps,
  ItemTextProps,
  DragIndicatorProps,
  IndicatorWrapperProps,
  ContentProps,
  ScrollViewProps,
  VirtualizedListProps,
  FlatListProps,
  SectionListProps,
  SectionHeaderTextProps,
  IconProps,
  AnimatePresenceProps
>({
  Root,
  Backdrop,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Content,
  ScrollView,
  VirtualizedList,
  FlatList,
  SectionList,
  SectionHeaderText,
  Icon,
  AnimatePresence,
}: {
  Root: React.ComponentType<ActionsheetProps>;
  Backdrop: React.ComponentType<BackdropProps>;
  Item: React.ComponentType<ItemProps>;
  Icon: React.ComponentType<IconProps>;
  ItemText: React.ComponentType<ItemTextProps>;
  DragIndicator: React.ComponentType<DragIndicatorProps>;
  IndicatorWrapper: React.ComponentType<IndicatorWrapperProps>;
  Content: React.ComponentType<ContentProps>;
  ScrollView: React.ComponentType<ScrollViewProps>;
  VirtualizedList: React.ComponentType<VirtualizedListProps>;
  FlatList: React.ComponentType<FlatListProps>;
  SectionList: React.ComponentType<SectionListProps>;
  SectionHeaderText: React.ComponentType<SectionHeaderTextProps>;
  AnimatePresence?: React.ComponentType<AnimatePresenceProps>;
}) {
  const Actionsheet = ActionsheetMain(Root) as any;
  Actionsheet.Backdrop = ActionsheetBackdrop(Backdrop, AnimatePresence);
  Actionsheet.Content = ActionsheetContent(Content, AnimatePresence);
  Actionsheet.DragIndicator = ActionsheetDragIndicator(DragIndicator);
  Actionsheet.DragIndicatorWrapper =
    ActionsheetDragIndicatorWrapper(IndicatorWrapper);
  Actionsheet.Item = ActionsheetItem(Item);
  Actionsheet.ItemText = ActionsheetItemText(ItemText);
  Actionsheet.Icon = ActionsheetIcon(Icon);
  Actionsheet.ScrollView = ActionsheetScrollView(ScrollView);
  Actionsheet.VirtualizedList = ActionsheetVirtualizedList(VirtualizedList);
  Actionsheet.FlatList = ActionsheetFlatList(FlatList);
  Actionsheet.SectionList = ActionsheetSectionList(SectionList);
  Actionsheet.SectionHeaderText =
    ActionsheetSectionHeaderText(SectionHeaderText);

  return Actionsheet as IActionsheetComponentType<
    ActionsheetProps,
    BackdropProps,
    ItemProps,
    ItemTextProps,
    DragIndicatorProps,
    IndicatorWrapperProps,
    ContentProps,
    ScrollViewProps,
    VirtualizedListProps,
    FlatListProps,
    SectionListProps,
    SectionHeaderTextProps,
    IconProps
  >;
}
