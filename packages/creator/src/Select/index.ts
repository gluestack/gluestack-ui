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
  const Select = SelectMain(StyledSelect) as any;
  Select.Item = SelectItem(StyledSelectItem);
  Select.Icon = SelectIcon(StyledSelectIcon);
  Select.ItemList = SelectItemList(StyledSelectItemList);

  Select.displayName = 'Select';
  Select.Item.displayName = 'Select.Item';
  Select.Icon.displayName = 'Select.Icon';
  Select.ItemList.displayName = 'Select.ItemList';

  return Select;
};
