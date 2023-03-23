import { Select as SelectMain } from './Select';
import { SelectTrigger } from './SelectTrigger';
import { SelectPortal } from './SelectPortal';
import { SelectBackdrop } from './SelectBackdrop';
import { SelectDragIndicator } from './SelectDragIndicator';
import { SelectDragIndicatorWrapper } from './SelectDragIndicatorWrapper';
import { SelectContent } from './SelectContent';
import { SelectItem } from './SelectItem';

export const createSelect = (
  { Root, Trigger, Input }: any,
  { Actionsheet }: any
) => {
  const Select = SelectMain(Root) as any;
  Select.Trigger = SelectTrigger(Trigger, Input);

  Select.Portal = SelectPortal(Actionsheet);
  Select.Backdrop = SelectBackdrop(Actionsheet);
  Select.Content = SelectContent(Actionsheet);
  Select.DragIndicator = SelectDragIndicator(Actionsheet);
  Select.DragIndicatorWrapper = SelectDragIndicatorWrapper(Actionsheet);
  Select.Item = SelectItem(Actionsheet);
  return Select as any;
};
