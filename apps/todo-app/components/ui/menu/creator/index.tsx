// This is the main index file that will be included in build

import { Menu as MenuMain } from './Menu';
import { MenuItem } from './MenuItemStately';
import { MenuItemLabel } from './MenuItemLabel';
import type { IMenuComponentType } from './types';
import { Separator } from './Separator';

const createMenu = <Root, Item, Label, Backdrop, Separator>({
  Root: StyledMenu,
  Item: StyledMenuItem,
  Label: StyledItemLabel,
  Backdrop: StyledBackdrop,
  AnimatePresence,
  Separator: StyledSeparator,
}: {
  Root: React.ComponentType<Root>;
  Item: React.ComponentType<Item>;
  Label: React.ComponentType<Label>;
  Backdrop: React.ComponentType<Backdrop>;
  AnimatePresence?: React.ComponentType<any>;
  Separator?: React.ComponentType<Separator>;
}) => {
  const MenuTemp = MenuMain({
    StyledMenu,
    StyledMenuItem,
    StyledBackdrop,
    AnimatePresence,
    StyledSeparator,
  }) as any;
  MenuTemp.Item = MenuItem;
  MenuTemp.ItemLabel = MenuItemLabel(StyledItemLabel);
  MenuTemp.Separator = Separator;
  const Menu = MenuTemp;
  return Menu as IMenuComponentType<Root, Item, Label, Separator>;
};
export { createMenu };
