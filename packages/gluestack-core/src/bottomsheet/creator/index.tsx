import { BottomSheet as BottomSheetMain } from './BottomSheet';
import BottomSheetContent from './BottomSheetContent';
import { BottomSheetItem } from './BottomSheetItem';
import BottomSheetBackdrop from './BottomSheetBackdrop';
import { BottomSheetDragIndicatorWrapper } from './BottomSheetDragIndicatorWrapper';
import type { IBottomSheetComponentType } from './types';
import BottomSheetDragIndicator from './BottomSheetDragIndicator';

// Export context for use in style files
export { BottomSheetContext } from './context';

export function createBottomSheet<
  BottomSheetProps,
  BackdropProps,
  ItemProps,
  ItemTextProps,
  DragIndicatorProps,
  IndicatorWrapperProps,
  ContentProps,
  ScrollViewProps,
  FlatListProps,
  SectionListProps,
  TextInputProps,
>({
  Root,
  Backdrop,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Content,
  ScrollView,
  FlatList,
  SectionList,
  TextInput,
}: {
  Root: React.ComponentType<BottomSheetProps>;
  Backdrop: React.ComponentType<BackdropProps>;
  Item: React.ComponentType<ItemProps>;
  ItemText: React.ComponentType<ItemTextProps>;
  DragIndicator: React.ComponentType<DragIndicatorProps>;
  IndicatorWrapper: React.ComponentType<IndicatorWrapperProps>;
  Content: React.ComponentType<ContentProps>;
  ScrollView: React.ComponentType<ScrollViewProps>;
  FlatList: React.ComponentType<FlatListProps>;
  SectionList: React.ComponentType<SectionListProps>;
  TextInput: React.ComponentType<TextInputProps>;
}) {
  const BottomSheet = BottomSheetMain(Root) as any;
  BottomSheet.Backdrop = BottomSheetBackdrop(Backdrop);
  BottomSheet.Content = BottomSheetContent(Content);
  BottomSheet.DragIndicator = BottomSheetDragIndicator(DragIndicator);
  BottomSheet.DragIndicatorWrapper =
    BottomSheetDragIndicatorWrapper(IndicatorWrapper);
  BottomSheet.Item = BottomSheetItem(Item);
  BottomSheet.ItemText = ItemText;
  BottomSheet.ScrollView = ScrollView;
  BottomSheet.FlatList = FlatList;
  BottomSheet.SectionList = SectionList;
  BottomSheet.TextInput = TextInput;

  BottomSheet.displayName = 'BottomSheet';
  BottomSheet.Content.displayName = 'BottomSheet.Content';
  BottomSheet.Backdrop.displayName = 'BottomSheet.Backdrop';
  BottomSheet.Item.displayName = 'BottomSheet.Item';
  BottomSheet.ItemText.displayName = 'BottomSheet.ItemText';
  BottomSheet.DragIndicator.displayName = 'BottomSheet.DragIndicator';
  BottomSheet.DragIndicatorWrapper.displayName = 'BottomSheet.DragIndicatorWrapper';
  BottomSheet.ScrollView.displayName = 'BottomSheet.ScrollView';
  BottomSheet.FlatList.displayName = 'BottomSheet.FlatList';
  BottomSheet.SectionList.displayName = 'BottomSheet.SectionList';
  BottomSheet.TextInput.displayName = 'BottomSheet.TextInput';

  return BottomSheet as IBottomSheetComponentType<
    BottomSheetProps,
    BackdropProps,
    ItemProps,
    ItemTextProps,
    DragIndicatorProps,
    IndicatorWrapperProps,
    ContentProps,
    ScrollViewProps,
    FlatListProps,
    SectionListProps,
    TextInputProps
  >;
}
