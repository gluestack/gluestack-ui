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
export const createSelect = (
  { Root, Trigger, Input, Icon }: any,
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
  }: any
) => {
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

  return Select as any;
};
