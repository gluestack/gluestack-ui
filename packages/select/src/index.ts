import { Select as SelectMain } from './Select';
import { SelectItem } from './SelectItem';
import { SelectIcon } from './SelectIcon';
import { SelectItemList } from './SelectItemList';
export { ISelectProps } from './types';
export const createSelect = ({ Root, Item, ItemList, Icon }: any) => {
  const Select = SelectMain(Root) as any;
  Select.Item = SelectItem(Item);
  Select.Icon = SelectIcon(Icon);
  Select.ItemList = SelectItemList(ItemList);

  Select.displayName = 'Select';
  Select.Item.displayName = 'Select.Item';
  Select.Icon.displayName = 'Select.Icon';
  Select.ItemList.displayName = 'Select.ItemList';

  return Select;
};
