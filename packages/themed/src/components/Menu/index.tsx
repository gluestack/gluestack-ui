import { AnimatePresence } from '@gluestack-style/animation-resolver';
import { createMenu } from '@gluestack-ui/menu';
import { Root, Item, Label, Backdrop } from './styled-components';

export const Menu = createMenu({
  Root,
  Item,
  Label,
  Backdrop,
  //@ts-ignore
  AnimatePresence: AnimatePresence,
});
export const MenuItem = Menu.Item;
export const MenuItemLabel = Menu.ItemLabel;
