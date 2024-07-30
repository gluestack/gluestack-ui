import { AnimatePresence } from '@gluestack-style/animation-resolver';
import { createMenu } from '@gluestack-ui/menu';
import { Root, Item, Label, Backdrop, Separator } from './styled-components';

export const Menu = createMenu({
  Root,
  Item,
  Label,
  Backdrop,
  //@ts-ignore
  AnimatePresence: AnimatePresence,
  Separator,
});
export const MenuItem = Menu.Item;
export const MenuItemLabel = Menu.ItemLabel;
export const MenuSeparator = Menu.Separator;
