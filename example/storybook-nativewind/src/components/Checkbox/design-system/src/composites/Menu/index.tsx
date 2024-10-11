import { createMenu } from '@gluestack-ui/menu';
import { Root, Item, Label, Backdrop } from './styled-components';

import { AnimatePresence } from '@gluestack-style/animation-resolver';

export const Menu = createMenu({
  Root,
  Item,
  Label,
  Backdrop,
  AnimatePresence: AnimatePresence,
});
