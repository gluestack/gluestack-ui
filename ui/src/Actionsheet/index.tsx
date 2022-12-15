import Actionsheet from './Actionsheet';
import ActionsheetContent from './ActionsheetContent';
import { ActionsheetDragIndicator } from './ActionsheetDragIndicator';
import { ActionsheetItem } from './ActionsheetItem';

export const createActionsheet = ({
  StyledActionsheet,
  StyledActionsheetContent,
  StyledActionsheetItem,
  StyledActionsheetDragIndicator,
}: any) => {
  const ActionsheetTemp = Actionsheet(StyledActionsheet) as any;
  ActionsheetTemp.Content = ActionsheetContent(StyledActionsheetContent);
  ActionsheetTemp.Item = ActionsheetItem(StyledActionsheetItem);
  ActionsheetTemp.DragIndicator = ActionsheetDragIndicator(
    StyledActionsheetDragIndicator
  );

  return ActionsheetTemp;
};
