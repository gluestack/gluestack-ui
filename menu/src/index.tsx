// This is the main index file that will be included in build

import { Menu as MenuMain } from './Menu';
import { MenuItem } from './MenuItemStately';
import { MenuItemLabel } from './MenuItemLabel';
import type { IMenuComponentType } from './types';
const createMenu = <Root, Item, Label>({
  Root: StyledMenu,
  Item: StyledMenuItem,
  Label: StyledItemLabel,
  AnimatePresence,
}: {
  Root: React.ComponentType<Root>;
  Item: React.ComponentType<Item>;
  Label: React.ComponentType<Label>;
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

  return Menu as IMenuComponentType<Root, Item, Label>;
};

export { createMenu };
