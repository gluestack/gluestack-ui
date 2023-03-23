import { Select as SelectMain } from './Select';
import { SelectItem } from './SelectItem';
import { SelectIcon } from './SelectIcon';
import { SelectItemList } from './SelectItemList';
import type { ISelectComponentType } from './types';
export { ISelectProps } from './types';
export const createSelect = <
  SelectProps,
  SelectItemProps,
  SelectItemListProps,
  SelectIconProps
>(
  {
    Root,
    Item,
    ItemList,
    Icon,
  }: {
    Root: React.ComponentType<SelectProps>;
    Item: React.ComponentType<SelectItemProps>;
    ItemList: React.ComponentType<SelectItemListProps>;
    Icon: React.ComponentType<SelectIconProps>;
  },
  { Actionsheet }: any
) => {
  const Select = SelectMain(Root) as any;
  Select.Item = SelectItem(Item, Actionsheet);
  Select.Icon = SelectIcon(Icon);
  Select.ItemList = SelectItemList(ItemList, Actionsheet);

  Select.displayName = 'Select';
  Select.Item.displayName = 'Select.Item';
  Select.Icon.displayName = 'Select.Icon';
  Select.ItemList.displayName = 'Select.ItemList';

  return Select as ISelectComponentType<
    SelectProps,
    SelectItemProps,
    SelectItemListProps,
    SelectIconProps
  >;
};
