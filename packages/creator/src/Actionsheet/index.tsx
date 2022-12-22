import { Actionsheet as ActionsheetMain } from './Actionsheet';
import ActionsheetContent from './ActionsheetContent';
import { ActionsheetItem } from './ActionsheetItem';
import { ActionsheetItemText } from './ActionsheetItemText';
import ActionsheetBackdrop from './ActionsheetBackdrop';
import ActionsheetDragIndicator from './ActionsheetDragIndicator';
import { ActionsheetDragIndicatorWrapper } from './ActionsheetDragIndicatorWrapper';

export const createActionsheet = ({
  StyledActionsheet,
  StyledActionsheetContent,
  StyledActionsheetItem,
  StyledActionsheetDragIndicator,
  StyledActionsheetItemText,
  StyledActionsheetBackdrop,
  StyledActionsheetDragIndicatorWrapper,
}: any) => {
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

  Actionsheet.displayName = 'Actionsheet';
  Actionsheet.Content.displayName = 'Actionsheet.Content';
  Actionsheet.Item.displayName = 'Actionsheet.Item';
  Actionsheet.ItemText.displayName = 'Actionsheet.ItemText';
  Actionsheet.DragIndicator.displayName = 'Actionsheet.DragIndicator';
  Actionsheet.Backdrop.displayName = 'Actionsheet.Backdrop';
  Actionsheet.DragIndicatorWrapper.displayName =
    'Actionsheet.DragIndicatorWrapper';

  return Actionsheet;
};
