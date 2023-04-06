import { createMenu } from '@gluestack-ui/newmenu';
import { Root, Item, Label } from './styled-components';
import { styled } from '../styled';
export const Menu: any = createMenu({
  Root,
  Item,
  Label,
  AnimatePresence: styled.Component,
});
