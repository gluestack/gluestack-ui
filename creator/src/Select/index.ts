import { Select as SelectMain } from './Select';
import { SelectItem } from './SelectItem';
import type { ISelectComponentType } from './types';
import { SelectIcon } from './SelectIcon';
import { SelectItemList } from './SelectItemList';
export { ISelectProps } from './types';
export const createSelect = ({
  StyledSelect,
  StyledSelectItem,
  StyledSelectItemList,
  StyledSelectIcon,
}: any) => {
  const SelectTemp = SelectMain(StyledSelect) as any;
  SelectTemp.Item = SelectItem(StyledSelectItem);
  SelectTemp.Icon = SelectIcon(StyledSelectIcon);
  SelectTemp.ItemList = SelectItemList(StyledSelectItemList);
  const Select = SelectTemp as ISelectComponentType;
  return Select;
};
