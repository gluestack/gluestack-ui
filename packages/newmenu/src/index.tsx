// This is the main index file that will be included in build

import { Menu as MenuMain } from './Menu';
import { MenuItem } from './MenuItemStately';
import { MenuItemLabel } from './MenuItemLabel';

const createMenu = <MenuProps, ItemProps, LabelProps>({
  Root: StyledMenu,
  Item: StyledMenuItem,
  Label: StyledItemLabel,
  AnimatePresence,
}: {
  Root: React.ComponentType<MenuProps>;
  Item: React.ComponentType<ItemProps>;
  Label: React.ComponentType<LabelProps>;
  AnimatePresence?: React.ComponentType<any>;
}) => {
  const MenuTemp = MenuMain({
    StyledMenu,
    StyledMenuItem,
    AnimatePresence,
  }) as any;
  MenuTemp.Item = MenuItem;
  MenuTemp.ItemLabel = MenuItemLabel(StyledItemLabel);
  const Menu = MenuTemp;

  return Menu;
};

export { createMenu };
