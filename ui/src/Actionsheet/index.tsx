import Actionsheet from './Actionsheet';
import ActionsheetContent from './ActionsheetContent';
import { ActionsheetDragIndicator } from './ActionsheetDragIndicator';
import { ActionsheetItem } from './ActionsheetItem';

const ActionsheetTemp = Actionsheet as any;
ActionsheetTemp.Content = ActionsheetContent;
ActionsheetTemp.Item = ActionsheetItem;
ActionsheetTemp.DragIndicator = ActionsheetDragIndicator;

export { ActionsheetTemp as Actionsheet };
