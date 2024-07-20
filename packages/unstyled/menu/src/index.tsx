// This is the main index file that will be included in build

import { Menu as MenuMain } from './Menu';
import { MenuItem } from './MenuItemStately';
import { MenuItemLabel } from './MenuItemLabel';
import type { IMenuComponentType } from './types';
import { Separator } from './Seperator';

const createMenu = <Root, Item, Label, Backdrop, Seperator>({
  Root: StyledMenu,
  Item: StyledMenuItem,
  Label: StyledItemLabel,
  Backdrop: StyledBackdrop,
  AnimatePresence,
  Seperator: StyledSeperator,
}: {
  Root: React.ComponentType<Root>;
  Item: React.ComponentType<Item>;
  Label: React.ComponentType<Label>;
  Backdrop: React.ComponentType<Backdrop>;
  AnimatePresence?: React.ComponentType<any>;
  Seperator: React.ComponentType<Seperator>;
}) => {
  const MenuTemp = MenuMain({
    StyledMenu,
    StyledMenuItem,
    StyledBackdrop,
    AnimatePresence,
    StyledSeperator,
  }) as any;
  MenuTemp.Item = MenuItem;
  MenuTemp.ItemLabel = MenuItemLabel(StyledItemLabel);
  MenuTemp.Separator = Separator;
  const Menu = MenuTemp;
  return Menu as IMenuComponentType<Root, Item, Label>;
};
export { createMenu };
