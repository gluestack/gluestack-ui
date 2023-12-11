import { Actionsheet as ActionsheetMain } from './Actionsheet';
import ActionsheetContent from './ActionsheetContent';
import { ActionsheetItem } from './ActionsheetItem';
import ActionsheetBackdrop from './ActionsheetBackdrop';
import { ActionsheetDragIndicatorWrapper } from './ActionsheetDragIndicatorWrapper';
import type { IActionsheetComponentType } from './types';
// import { ActionsheetItemText } from './ActionsheetItemText';
// import ActionsheetDragIndicator from './ActionsheetDragIndicator';
// import { ActionsheetScrollView } from './ActionsheetScrollView';
// import { ActionsheetVirtualizedList } from './ActionsheetVirtualizedList';

// import { ActionsheetFlatList } from './ActionsheetFlatList';
// import { ActionsheetSectionList } from './ActionsheetSectionList';
// import { ActionsheetSectionHeaderText } from './ActionsheetSectionHeaderText';
// import { ActionsheetIcon } from './ActionsheetIcon';

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
  Actionsheet.DragIndicator = DragIndicator;
  Actionsheet.DragIndicatorWrapper =
    ActionsheetDragIndicatorWrapper(IndicatorWrapper);
  Actionsheet.Item = ActionsheetItem(Item);
  Actionsheet.ItemText = ItemText;
  Actionsheet.Icon = Icon;
  Actionsheet.ScrollView = ScrollView;
  Actionsheet.VirtualizedList = VirtualizedList;
  Actionsheet.FlatList = FlatList;
  Actionsheet.SectionList = SectionList;
  Actionsheet.SectionHeaderText = SectionHeaderText;

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
