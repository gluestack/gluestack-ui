import { Actionsheet as ActionsheetMain } from './Actionsheet';
import ActionsheetContent from './ActionsheetContent';
import { ActionsheetItem } from './ActionsheetItem';
import { ActionsheetItemText } from './ActionsheetItemText';
import ActionsheetBackdrop from './ActionsheetBackdrop';
import ActionsheetDragIndicator from './ActionsheetDragIndicator';
import { ActionsheetDragIndicatorWrapper } from './ActionsheetDragIndicatorWrapper';
import type { IActionsheetComponentType } from './types';

export function createActionsheet<A, B, C, D, E, F, G>({
  StyledActionsheet,
  StyledActionsheetContent,
  StyledActionsheetItem,
  StyledActionsheetDragIndicator,
  StyledActionsheetItemText,
  StyledActionsheetBackdrop,
  StyledActionsheetDragIndicatorWrapper,
}: {
  StyledActionsheet: React.ComponentType<A>;
  StyledActionsheetContent: React.ComponentType<B>;
  StyledActionsheetItem: React.ComponentType<C>;
  StyledActionsheetDragIndicator: React.ComponentType<D>;
  StyledActionsheetItemText: React.ComponentType<E>;
  StyledActionsheetBackdrop: React.ComponentType<F>;
  StyledActionsheetDragIndicatorWrapper: React.ComponentType<G>;
}) {
  const Actionsheet = ActionsheetMain(StyledActionsheet) as any;
  Actionsheet.Content = ActionsheetContent(StyledActionsheetContent);
  Actionsheet.Item = ActionsheetItem(StyledActionsheetItem);
  Actionsheet.ItemText = ActionsheetItemText(StyledActionsheetItemText);
  Actionsheet.DragIndicator = ActionsheetDragIndicator(
    StyledActionsheetDragIndicator
  );
  Actionsheet.Backdrop = ActionsheetBackdrop(StyledActionsheetBackdrop);
  Actionsheet.DragIndicatorWrapper = ActionsheetDragIndicatorWrapper(
    StyledActionsheetDragIndicatorWrapper
  );

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
