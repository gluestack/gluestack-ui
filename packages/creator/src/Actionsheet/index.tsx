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
  const ActionsheetTemp = ActionsheetMain(StyledActionsheet) as any;
  ActionsheetTemp.Content = ActionsheetContent(StyledActionsheetContent);
  ActionsheetTemp.Item = ActionsheetItem(StyledActionsheetItem);
  ActionsheetTemp.ItemText = ActionsheetItemText(StyledActionsheetItemText);
  ActionsheetTemp.DragIndicator = ActionsheetDragIndicator(
    StyledActionsheetDragIndicator
  );
  ActionsheetTemp.Backdrop = ActionsheetBackdrop(StyledActionsheetBackdrop);
  ActionsheetTemp.DragIndicatorWrapper = ActionsheetDragIndicatorWrapper(
    StyledActionsheetDragIndicatorWrapper
  );
  const Actionsheet = ActionsheetTemp as any;
  return Actionsheet;
};
