import { Actionsheet as ActionsheetMain } from './Actionsheet';
import ActionsheetContent from './ActionsheetContent';
import { ActionsheetItem } from './ActionsheetItem';
import { ActionsheetItemText } from './ActionsheetItemText';
import ActionsheetBackdrop from './ActionsheetBackdrop';
import ActionsheetDragIndicator from './ActionsheetDragIndicator';
import { ActionsheetDragIndicatorWrapper } from './ActionsheetDragIndicatorWrapper';
import type { IActionsheetComponentType } from './types';

export function createActionsheet<A, B, C, D, E, F, G>({
  Root,
  Backdrop,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Content,
}: {
  Root: React.ComponentType<A>;
  Backdrop: React.ComponentType<B>;
  Item: React.ComponentType<C>;
  ItemText: React.ComponentType<D>;
  DragIndicator: React.ComponentType<E>;
  IndicatorWrapper: React.ComponentType<F>;
  Content: React.ComponentType<G>;
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

  // Actionsheet.displayName = 'Actionsheet';
  // Actionsheet.Content.displayName = 'Actionsheet.Content';
  // Actionsheet.Item.displayName = 'Actionsheet.Item';
  // Actionsheet.ItemText.displayName = 'Actionsheet.ItemText';
  // Actionsheet.DragIndicator.displayName = 'Actionsheet.DragIndicator';
  // Actionsheet.Backdrop.displayName = 'Actionsheet.Backdrop';
  // Actionsheet.DragIndicatorWrapper.displayName =
  //   'Actionsheet.DragIndicatorWrapper';

  // console.log(Actionsheet, 'Actionsheet');

  return Actionsheet as IActionsheetComponentType<A, B, C, D, E, F, G>;
}
