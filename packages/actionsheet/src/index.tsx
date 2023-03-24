import { Actionsheet as ActionsheetMain } from './Actionsheet';
import ActionsheetContent from './ActionsheetContent';
import { ActionsheetItem } from './ActionsheetItem';
import { ActionsheetItemText } from './ActionsheetItemText';
import ActionsheetBackdrop from './ActionsheetBackdrop';
import ActionsheetDragIndicator from './ActionsheetDragIndicator';
import { ActionsheetDragIndicatorWrapper } from './ActionsheetDragIndicatorWrapper';

import type { IActionsheetComponentType } from './types';
import { ActionsheetScrollView } from './ActionsheetScrollView';

export function createActionsheet<
  ActionsheetProps,
  BackdropProps,
  ItemProps,
  ItemTextProps,
  DragIndicatorProps,
  IndicatorWrapperProps,
  ContentProps,
  ScrollViewProps
>({
  Root,
  Backdrop,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Content,
  ScrollView,
}: {
  Root: React.ComponentType<ActionsheetProps>;
  Backdrop: React.ComponentType<BackdropProps>;
  Item: React.ComponentType<ItemProps>;
  ItemText: React.ComponentType<ItemTextProps>;
  DragIndicator: React.ComponentType<DragIndicatorProps>;
  IndicatorWrapper: React.ComponentType<IndicatorWrapperProps>;
  Content: React.ComponentType<ContentProps>;
  ScrollView: React.ComponentType<ScrollViewProps>;
}) {
  // {
  //   Root: React.ComponentType<A>;
  //   Content: React.ComponentType<B>;
  //   Item: React.ComponentType<C>;
  //   DragIndicator: React.ComponentType<D>;
  //   ItemText: React.ComponentType<E>;
  //   Backdrop: React.ComponentType<F>;
  //   DragIndicatorWrapper: React.ComponentType<G>;
  // }
  const Actionsheet = ActionsheetMain(Root) as any;
  Actionsheet.Content = ActionsheetContent(Content);
  Actionsheet.Item = ActionsheetItem(Item);
  Actionsheet.ItemText = ActionsheetItemText(ItemText);
  Actionsheet.DragIndicator = ActionsheetDragIndicator(DragIndicator);
  Actionsheet.Backdrop = ActionsheetBackdrop(Backdrop);
  Actionsheet.DragIndicatorWrapper =
    ActionsheetDragIndicatorWrapper(IndicatorWrapper);
  Actionsheet.ScrollView = ActionsheetScrollView(ScrollView);

  // Actionsheet.displayName = 'Actionsheet';
  // Actionsheet.Content.displayName = 'Actionsheet.Content';
  // Actionsheet.Item.displayName = 'Actionsheet.Item';
  // Actionsheet.ItemText.displayName = 'Actionsheet.ItemText';
  // Actionsheet.DragIndicator.displayName = 'Actionsheet.DragIndicator';
  // Actionsheet.Backdrop.displayName = 'Actionsheet.Backdrop';
  // Actionsheet.DragIndicatorWrapper.displayName =
  //   'Actionsheet.DragIndicatorWrapper';

  // console.log(Actionsheet, 'Actionsheet');

  return Actionsheet as IActionsheetComponentType<
    ActionsheetProps,
    BackdropProps,
    ItemProps,
    ItemTextProps,
    DragIndicatorProps,
    IndicatorWrapperProps,
    ContentProps,
    ScrollViewProps
  >;
}
