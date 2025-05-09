import { Select as SelectMain } from './Select';
import { SelectTrigger } from './SelectTrigger';
import { SelectPortal } from './SelectPortal';
import { SelectBackdrop } from './SelectBackdrop';
import { SelectDragIndicator } from './SelectDragIndicator';
import { SelectDragIndicatorWrapper } from './SelectDragIndicatorWrapper';
import { SelectContent } from './SelectContent';
import { SelectItem } from './SelectItem';
import { SelectInput } from './SelectInput';
import { SelectIcon } from './SelectIcon';
import { SelectScrollView } from './SelectScrollView';
import { SelectVirtualizedList } from './SelectVirtualizedList';
import { SelectFlatList } from './SelectFlatList';
import { SelectSectionList } from './SelectSectionList';
import { SelectSectionHeaderText } from './SelectSectionHeaderText';
import type { ISelectComponentType } from './types';

export function createSelect<
  SelectProps,
  SelectTriggerProps,
  SelectInputProps,
  SelectIconProps,
  SelectPortalProps,
  SelectBackdropProps,
  SelectContentProps,
  SelectDragIndicatorProps,
  SelectDragIndicatorWrapperProps,
  SelectItemProps,
  SelectItemTextProps,
  SelectScrollViewProps,
  SelectVirtualizedListProps,
  SelectFlatListProps,
  SelectSectionListProps,
  SelectSectionHeaderTextProps
>(
  {
    Root,
    Trigger,
    Input,
    Icon,
  }: {
    Root: React.ComponentType<SelectProps>;
    Trigger: React.ComponentType<SelectTriggerProps>;
    Input: React.ComponentType<SelectInputProps>;
    Icon: React.ComponentType<SelectIconProps>;
  },
  {
    Portal,
    Backdrop,
    Content,
    DragIndicator,
    DragIndicatorWrapper,
    Item,
    ItemText,
    ScrollView,
    VirtualizedList,
    FlatList,
    SectionList,
    SectionHeaderText,
  }: {
    Portal: React.ComponentType<SelectPortalProps>;
    Backdrop: React.ComponentType<SelectBackdropProps>;
    Content: React.ComponentType<SelectContentProps>;
    DragIndicator: React.ComponentType<SelectDragIndicatorProps>;
    DragIndicatorWrapper: React.ComponentType<SelectDragIndicatorWrapperProps>;
    Item: React.ComponentType<SelectItemProps>;
    ItemText: React.ComponentType<SelectItemTextProps>;
    ScrollView: React.ComponentType<SelectScrollViewProps>;
    VirtualizedList: React.ComponentType<SelectVirtualizedListProps>;
    FlatList: React.ComponentType<SelectFlatListProps>;
    SectionList: React.ComponentType<SelectSectionListProps>;
    SectionHeaderText: React.ComponentType<SelectSectionHeaderTextProps>;
  }
) {
  const Select = SelectMain(Root) as any;
  Select.Trigger = SelectTrigger(Trigger);
  Select.Input = SelectInput(Input);
  Select.Icon = SelectIcon(Icon);

  // Actionsheet mapping
  Select.Portal = SelectPortal(Portal);
  Select.Backdrop = SelectBackdrop(Backdrop);
  Select.Content = SelectContent(Content);
  Select.DragIndicator = SelectDragIndicator(DragIndicator);
  Select.DragIndicatorWrapper =
    SelectDragIndicatorWrapper(DragIndicatorWrapper);
  Select.Item = SelectItem(Item, ItemText);
  Select.ScrollView = SelectScrollView(ScrollView);
  Select.VirtualizedList = SelectVirtualizedList(VirtualizedList);
  Select.FlatList = SelectFlatList(FlatList);
  Select.SectionList = SelectSectionList(SectionList);
  Select.SectionHeaderText = SelectSectionHeaderText(SectionHeaderText);

  Select.displayName = 'Select';
  Select.Trigger.displayName = 'Select.Trigger';
  Select.Input.displayName = 'Select.Input';
  Select.Icon.displayName = 'Select.Icon';
  Select.Portal.displayName = 'Select.Portal';
  Select.Backdrop.displayName = 'Select.Backdrop';
  Select.Content.displayName = 'Select.Content';
  Select.DragIndicator.displayName = 'Select.DragIndicator';
  Select.DragIndicatorWrapper.displayName = 'Select.DragIndicatorWrapper';
  Select.Item.displayName = 'Select.Item';
  Select.ScrollView.displayName = 'Select.ScrollView';
  Select.VirtualizedList.displayName = 'Select.VirtualizedList';
  Select.FlatList.displayName = 'Select.FlatList';
  Select.SectionList.displayName = 'Select.SectionList';
  Select.SectionHeaderText.displayName = 'Select.SectionHeaderText';

  return Select as ISelectComponentType<
    SelectProps,
    SelectTriggerProps,
    SelectInputProps,
    SelectIconProps,
    SelectPortalProps,
    SelectBackdropProps,
    SelectContentProps,
    SelectDragIndicatorProps,
    SelectDragIndicatorWrapperProps,
    SelectItemProps,
    SelectItemTextProps,
    SelectScrollViewProps,
    SelectVirtualizedListProps,
    SelectFlatListProps,
    SelectSectionListProps,
    SelectSectionHeaderTextProps
  >;
}
